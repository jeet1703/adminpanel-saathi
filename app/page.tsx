import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import AdminPanel from "./components/AdminPanel";
import { redirect } from "next/navigation";
import { allowedEmails } from "@/lib/constants";


export default async function ProtectedPage() {
  const session = await getServerSession(authOptions);

  

  // If session is not found or the email is not in the allowed list, redirect to login
  if (!session || !allowedEmails.includes(session.user?.email || "")) {
    return redirect("/login");
  }

  return <AdminPanel />;
}
