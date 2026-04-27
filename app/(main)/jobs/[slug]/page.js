import JobDetailsPage from "@/components/pages/JobDetailsPage";

export default function Page({ params }) {
  return <JobDetailsPage slug={params.slug} />;
}
