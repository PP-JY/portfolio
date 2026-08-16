import { profile } from "@/data/content";

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 text-center sm:flex-row sm:px-8 sm:text-left">
        <p className="font-mono text-[11px] text-muted">
          © {new Date().getFullYear()} {profile.name} · {profile.affiliation}
        </p>
        <p className="font-mono text-[11px] text-muted">{profile.role}</p>
      </div>
    </footer>
  );
}
