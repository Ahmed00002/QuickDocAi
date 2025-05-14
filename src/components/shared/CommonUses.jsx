import React from "react";
import SectionTitle from "./SectionTitle";
import TrustCard from "../trustPrivacy/TrustCard";

const CommonUses = () => {
  const commonUseCases = [
    {
      id: 1,
      title: "Medical Report Summarization",
      description:
        "Doctors and hospital staff can quickly extract patient names, dates, diagnosis, and prescriptions from medical reports.",
      icon: "🩺",
    },
    {
      id: 2,
      title: "Legal Document Analysis",
      description:
        "Lawyers can analyze long contracts and find key clauses, dates, and names instantly.",
      icon: "⚖️",
    },
    {
      id: 3,
      title: "Invoice Data Extraction",
      description:
        "Business owners can upload invoices to extract invoice number, date, client name, and amount without manual typing.",
      icon: "🧾",
    },
    {
      id: 4,
      title: "Academic Certificate Scanner",
      description:
        "Students or institutions can extract name, result, degree type from mark sheets or certificates.",
      icon: "🎓",
    },
    {
      id: 5,
      title: "Government Form Review",
      description:
        "Citizens can upload government documents (like tax forms or NIDs) and extract key info easily.",
      icon: "🏛️",
    },
  ];

  return (
    <>
      <section className="marginTop center">
        <SectionTitle
          title={"Common Use Cases"}
          subtitle={"Real-World Scenarios Where QuickDoc AI Makes Life Easier"}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {commonUseCases.map((uses, index) => {
            return <TrustCard key={index} trust={uses} />;
          })}
        </div>
      </section>
    </>
  );
};

export default CommonUses;
