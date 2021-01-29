import Link from "next/link";

export default function NavigationLink({ label, href }) {
  return (
    <Link href={href}>
      <div style={{ cursor: "pointer" }} className="nav-link">
        {label}
      </div>
    </Link>
  );
}
