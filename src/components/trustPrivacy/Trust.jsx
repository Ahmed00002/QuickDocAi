import React from "react";
import SectionTitle from "../shared/SectionTitle";
import {
  Bot,
  File,
  Lock,
  Settings,
  Shield,
  ShieldCheck,
  Trash2,
} from "lucide-react";
import TrustCard from "./TrustCard";

const Trust = () => {
  const trustPoints = {
    title: "Your Documents, Your Privacy — Always Protected",
    subtitle: "Trusted by professionals, powered by privacy-first AI.",
    points: [
      {
        id: 1,
        title: "We Never Store Your Documents",
        description:
          "Every file you upload is analyzed in real-time and instantly discarded. Nothing is saved on our servers.",
        icon: (
          <>
            <File size={30} />
          </>
        ), // Lucide or Heroicons
      },
      {
        id: 2,
        title: "100% GDPR Compliant",
        description:
          "Your data privacy matters. QuickDoc follows strict data protection laws across the globe.",
        icon: <Shield size={30} />,
      },
      {
        id: 3,
        title: "End-to-End Encryption",
        description:
          "All communications and file transfers are fully encrypted using industry-standard SSL.",
        icon: <Lock size={30} />,
      },
      {
        id: 4,
        title: "No Human Intervention",
        description:
          "Your files are processed by AI only — no human ever sees your documents.",
        icon: <Bot size={30} />,
      },
      {
        id: 5,
        title: "Auto-Delete After Analysis",
        description:
          "Uploaded documents are deleted from memory right after processing is complete.",
        icon: <Trash2 size={30} />,
      },
      {
        id: 6,
        title: "Your Control, Always",
        description:
          "You choose what to analyze. No background tracking, no hidden uploads.",
        icon: <Settings size={30} />,
      },
      {
        id: 7,
        title: "Enterprise-grade Security",
        description:
          "Built with the same security practices trusted by banks and enterprises.",
        icon: <ShieldCheck size={30} />,
      },
    ],
  };

  return (
    <div className="center marginTop">
      <SectionTitle
        title={"Trust Security"}
        subtitle={"Your Documents, Your Privacy — Always Protected"}
      />

      {/* Trust Points List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {trustPoints.points.map((point) => (
          <TrustCard key={point.id} trust={point} />
        ))}
      </div>
    </div>
  );
};

export default Trust;
