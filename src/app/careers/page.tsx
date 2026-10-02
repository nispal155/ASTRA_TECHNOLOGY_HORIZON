import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import Breadcrumbs from "@/components/Breadcrumbs";
import JobCard from "@/components/JobCard";
import ApplicationForm from "@/components/ApplicationForm";
import { allJobs } from "@/lib/content";

export default function CareersPage() {
  const jobs = allJobs.filter((j) => j.kind === "job");
  const internships = allJobs.filter((j) => j.kind === "internship");

  return (
    <div className="flex flex-col min-h-screen bg-brand-surface">
      <Navbar />
      <main id="main" className="flex-grow pt-16 sm:pt-20">
        <section className="pt-10 pb-6 lg:pt-14 lg:pb-8 bg-gradient-to-b from-brand-accent-soft to-brand-bg border-b border-brand-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs items={[{ name: "Careers", path: "/careers" }]} className="mb-10" />
            <SectionHeader
              as="h1"
              subtitle="Careers at Astra"
              title="Build the future with us."
              description="We are always looking for exceptional talent and passionate learners to join our teams in Nepal and around the globe."
              centered={true}
            />
          </div>
        </section>

        <section className="py-14 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <h2 className="text-2xl font-bold text-brand-primary mb-8">Open Positions</h2>
            <div className="space-y-6 mb-16">
              {jobs.map((job) => <JobCard key={job.slug} job={job} />)}
            </div>

            <h2 className="text-2xl font-bold text-brand-primary mb-8">Internship Programs</h2>
            <div className="space-y-6">
              {internships.map((job) => <JobCard key={job.slug} job={job} />)}
            </div>
          </div>

          <div>
            <div id="apply" className="card p-6 sm:p-8 lg:sticky lg:top-28">
              <h2 className="text-2xl font-bold text-brand-primary mb-6">Submit Your Application</h2>
              <ApplicationForm jobs={allJobs} />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
