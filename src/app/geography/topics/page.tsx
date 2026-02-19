import { redirect } from "next/navigation";

// Topics list is shown on the main geography page
export default function GeographyTopicsPage() {
  redirect("/geography");
}
