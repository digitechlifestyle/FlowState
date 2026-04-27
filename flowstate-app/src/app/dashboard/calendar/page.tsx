"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { formatDateTime } from "@/lib/utils";

interface Post {
  id: string;
  content: string;
  platforms: string;
  status: string;
  scheduledAt: string | null;
  postType: string;
}

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];

export default function CalendarPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [currentDate, setCurrentDate] = useState<Date | null>(null);
  const [today, setToday] = useState<Date | null>(null);
  const [selectedDay, setSelectedDay] = useState<Date | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const now = new Date();
    setCurrentDate(now);
    setToday(now);
  }, []);

  const fetchPosts = useCallback(async () => {
    if (!currentDate) return;
    setLoading(true);
    const monthStr = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, "0")}`;
    const res = await fetch(`/api/posts?month=${monthStr}`);
    const data = await res.json();
    setPosts(Array.isArray(data) ? data : []);
    setLoading(false);
  }, [currentDate]);

  useEffect(() => { fetchPosts(); }, [fetchPosts]);

  const year = currentDate?.getFullYear() ?? new Date().getFullYear();
  const month = currentDate?.getMonth() ?? new Date().getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const getPostsForDay = (day: number) => {
    return posts.filter((p) => {
      if (!p.scheduledAt) return false;
      const d = new Date(p.scheduledAt);
      return d.getFullYear() === year && d.getMonth() === month && d.getDate() === day;
    });
  };

  const selectedDayPosts = selectedDay ? getPostsForDay(selectedDay.getDate()) : [];

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-white mb-1">Content Calendar</h1>
          <p className="text-[#8888aa]">Plan and visualise your entire content strategy.</p>
        </div>
        <Link href="/dashboard/compose" className="gradient-bg text-white px-5 py-2.5 rounded-xl font-medium text-sm hover:opacity-90 transition-opacity">
          + Schedule Post
        </Link>
      </div>

      <div className="glass rounded-2xl border border-white/5 overflow-hidden">
        {/* Calendar header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/5">
          <button
            onClick={() => setCurrentDate(new Date(year, month - 1, 1))}
            className="p-2 rounded-lg hover:bg-white/5 text-[#8888aa] hover:text-white transition-colors"
          >
            ←
          </button>
          <h2 className="text-white font-semibold text-lg">
            {MONTHS[month]} {year}
          </h2>
          <button
            onClick={() => setCurrentDate(new Date(year, month + 1, 1))}
            className="p-2 rounded-lg hover:bg-white/5 text-[#8888aa] hover:text-white transition-colors"
          >
            →
          </button>
        </div>

        {/* Day headers */}
        <div className="grid grid-cols-7 border-b border-white/5">
          {DAYS.map((d) => (
            <div key={d} className="py-3 text-center text-xs font-medium text-[#8888aa] uppercase tracking-wider">
              {d}
            </div>
          ))}
        </div>

        {/* Calendar grid */}
        {loading ? (
          <div className="flex items-center justify-center py-24">
            <div className="w-8 h-8 border-2 border-purple-500/30 border-t-purple-500 rounded-full animate-spin" />
          </div>
        ) : (
          <div className="grid grid-cols-7">
            {Array.from({ length: firstDay }).map((_, i) => (
              <div key={`empty-${i}`} className="h-24 border-b border-r border-white/5 bg-white/1" />
            ))}
            {Array.from({ length: daysInMonth }).map((_, i) => {
              const day = i + 1;
              const dayPosts = getPostsForDay(day);
              const isToday = !!today && today.getDate() === day && today.getMonth() === month && today.getFullYear() === year;
              const isSelected = selectedDay?.getDate() === day && selectedDay?.getMonth() === month;

              return (
                <div
                  key={day}
                  onClick={() => setSelectedDay(new Date(year, month, day))}
                  className={`h-24 border-b border-r border-white/5 p-2 cursor-pointer transition-colors ${
                    isSelected ? "bg-purple-500/10" : "hover:bg-white/3"
                  }`}
                >
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs mb-1 ${
                    isToday ? "gradient-bg text-white font-bold" : "text-[#8888aa]"
                  }`}>
                    {day}
                  </div>
                  <div className="space-y-0.5">
                    {dayPosts.slice(0, 2).map((p) => (
                      <div
                        key={p.id}
                        className={`text-xs px-1.5 py-0.5 rounded truncate ${
                          p.status === "published" ? "bg-green-500/20 text-green-400" :
                          p.status === "scheduled" ? "bg-purple-500/20 text-purple-400" :
                          "bg-white/10 text-[#8888aa]"
                        }`}
                      >
                        {p.content.slice(0, 20)}…
                      </div>
                    ))}
                    {dayPosts.length > 2 && (
                      <div className="text-xs text-[#8888aa] pl-1">+{dayPosts.length - 2} more</div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Selected day posts */}
      {selectedDay && (
        <div className="mt-6 glass rounded-2xl p-6 border border-white/5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-white font-semibold">
              {selectedDay.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })}
            </h3>
            <Link href="/dashboard/compose" className="text-purple-400 text-sm hover:text-purple-300">
              + Add post
            </Link>
          </div>
          {selectedDayPosts.length === 0 ? (
            <p className="text-[#8888aa] text-sm">No posts scheduled for this day.</p>
          ) : (
            <div className="space-y-3">
              {selectedDayPosts.map((p) => {
                const platforms = JSON.parse(p.platforms || "[]") as string[];
                return (
                  <div key={p.id} className="flex items-start gap-4 p-4 bg-white/3 rounded-xl border border-white/5">
                    <div className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${
                      p.status === "published" ? "bg-green-400" : "bg-purple-400"
                    }`} />
                    <div className="flex-1">
                      <p className="text-white text-sm mb-2 line-clamp-2">{p.content}</p>
                      <div className="flex items-center gap-3 text-xs text-[#8888aa]">
                        {p.scheduledAt && <span>🕐 {formatDateTime(p.scheduledAt)}</span>}
                        <span>📤 {platforms.join(", ") || "No platforms"}</span>
                        <span className={`capitalize px-2 py-0.5 rounded-full ${
                          p.status === "published" ? "bg-green-500/20 text-green-400" :
                          "bg-purple-500/20 text-purple-400"
                        }`}>{p.status}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
