"use client";

import { useState, useEffect, useCallback } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2, Lock, RefreshCw } from "lucide-react";

interface RSVP {
  id: string;
  name: string;
  attending: boolean;
  plusOne: boolean;
  createdAt: string;
}

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [rsvps, setRsvps] = useState<RSVP[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchRSVPs = useCallback(async (pw: string) => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/admin", {
        headers: { "x-admin-password": pw },
      });

      if (res.status === 401) {
        setAuthenticated(false);
        setError("Invalid password");
        return;
      }

      if (!res.ok) throw new Error("Failed to fetch");

      const data = await res.json();
      setRsvps(data.rsvps);
      setAuthenticated(true);
    } catch {
      setError("Failed to load RSVPs");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const stored = sessionStorage.getItem("admin-pw");
    if (stored) {
      setPassword(stored);
      fetchRSVPs(stored);
    }
  }, [fetchRSVPs]);

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    sessionStorage.setItem("admin-pw", password);
    fetchRSVPs(password);
  }

  const attending = rsvps.filter((r) => r.attending);
  const declined = rsvps.filter((r) => !r.attending);
  const plusOnes = rsvps.filter((r) => r.plusOne && r.attending);
  const totalGuests = attending.length + plusOnes.length;

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center px-6">
        <div className="w-full max-w-sm animate-fade-in-up">
          <div className="text-center mb-10">
            <Lock className="w-9 h-9 text-stone-light mx-auto mb-5" strokeWidth={0.8} />
            <h1 className="font-serif text-2xl text-charcoal mb-2">Admin Access</h1>
            <p className="text-stone-warm text-sm font-normal">Enter password to view RSVPs</p>
          </div>

          <div className="form-card rounded-sm p-8">
            <form onSubmit={handleLogin} className="space-y-5">
              <div className="space-y-3">
                <Label htmlFor="password" className="text-xs uppercase tracking-[0.2em] text-stone-warm font-normal">
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter admin password"
                  className="border-border-soft bg-white h-12 text-sm text-charcoal placeholder:text-stone-light"
                />
              </div>

              {error && (
                <p className="text-coral text-sm font-normal">{error}</p>
              )}

              <button
                type="submit"
                disabled={!password || loading}
                className="w-full bg-charcoal text-cream py-3.5 text-xs uppercase tracking-[0.2em] font-normal border border-charcoal hover:bg-charcoal-light transition-all duration-300 disabled:opacity-30 flex items-center justify-center"
              >
                {loading ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  "View RSVPs"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream px-6 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="font-serif text-3xl text-charcoal">RSVP Responses</h1>
            <p className="text-stone-warm text-sm mt-1.5 font-normal">
              Laura &amp; John&apos;s Wedding &middot; September 19, 2026
            </p>
          </div>
          <button
            onClick={() => fetchRSVPs(password)}
            className="flex items-center gap-2 text-stone-warm text-xs uppercase tracking-[0.15em] font-normal border border-border-soft px-4 py-2.5 hover:border-stone-warm hover:text-charcoal transition-all duration-300"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            Refresh
          </button>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {[
            { label: "Total", value: rsvps.length },
            { label: "Attending", value: attending.length },
            { label: "Declined", value: declined.length },
            { label: "Total Guests", value: totalGuests },
          ].map((stat) => (
            <div key={stat.label} className="form-card rounded-sm p-5 text-center">
              <p className="text-3xl font-serif text-charcoal leading-none">{stat.value}</p>
              <p className="text-xs text-stone-warm uppercase tracking-[0.2em] mt-2 font-normal">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Table */}
        {loading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="w-5 h-5 animate-spin text-stone-warm" />
          </div>
        ) : rsvps.length === 0 ? (
          <div className="text-center py-20 form-card rounded-sm">
            <p className="text-stone-warm text-sm font-normal">No RSVPs yet</p>
          </div>
        ) : (
          <div className="form-card rounded-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border-soft/60">
                    <th className="text-left text-xs uppercase tracking-[0.2em] text-stone-warm font-normal px-6 py-4">
                      Name
                    </th>
                    <th className="text-left text-xs uppercase tracking-[0.2em] text-stone-warm font-normal px-6 py-4">
                      Attending
                    </th>
                    <th className="text-left text-xs uppercase tracking-[0.2em] text-stone-warm font-normal px-6 py-4">
                      Plus One
                    </th>
                    <th className="text-left text-xs uppercase tracking-[0.2em] text-stone-warm font-normal px-6 py-4">
                      Submitted
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {rsvps.map((rsvp) => (
                    <tr
                      key={rsvp.id}
                      className="border-b border-border-soft/40 last:border-0 hover:bg-white/30 transition-colors duration-200"
                    >
                      <td className="px-6 py-4 text-sm text-charcoal">
                        {rsvp.name}
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`inline-flex items-center px-2.5 py-1 text-xs font-normal tracking-wide ${
                            rsvp.attending
                              ? "text-green-700 bg-green-50/80"
                              : "text-coral bg-coral/5"
                          }`}
                        >
                          {rsvp.attending ? "Yes" : "No"}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`inline-flex items-center px-2.5 py-1 text-xs font-normal tracking-wide ${
                            rsvp.plusOne
                              ? "text-charcoal bg-charcoal/5"
                              : "text-stone-warm bg-stone-warm/5"
                          }`}
                        >
                          {rsvp.plusOne ? "Yes" : "No"}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-stone-warm font-normal">
                        {new Date(rsvp.createdAt).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                          hour: "numeric",
                          minute: "2-digit",
                        })}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {error && (
          <p className="text-coral text-sm mt-4 text-center font-normal">{error}</p>
        )}
      </div>
    </div>
  );
}
