import React from "react";
import { MdPrivacyTip } from "react-icons/md";

const PrivacyPolicy = () => {
  return (
    <div className="center  mx-auto px-6 py-10 text-gray-800">
      <div className="flex items-center gap-2 mb-6">
        <MdPrivacyTip className="text-3xl text-blue-600" />
        <h1 className="text-3xl text-left font-bold">Privacy Policy</h1>
      </div>

      <p className="mb-4 text-left">
        Welcome to <strong>QuickDoc AI</strong>. Your privacy is critically
        important to us. This Privacy Policy outlines how we collect, use, and
        protect your personal information.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2 text-left">
        1. Information We Collect
      </h2>
      <ul className="list-disc list-inside space-y-1">
        <li>Personal information (name, email) when you sign up</li>
        <li>Uploaded documents for analysis</li>
        <li>Usage data like clicks, page visits, etc.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        2. How We Use Your Information
      </h2>
      <ul className="list-disc list-inside space-y-1">
        <li>To provide and improve our document analysis service</li>
        <li>To communicate with you about your account or support requests</li>
        <li>To enhance user experience and analyze trends</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Data Protection</h2>
      <p className="mb-4">
        We implement strict security measures to ensure the confidentiality and
        integrity of your data. Documents uploaded are stored securely and are
        not shared with any third party.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Your Rights</h2>
      <ul className="list-disc list-inside space-y-1">
        <li>
          You can request to delete your account and associated data anytime
        </li>
        <li>You may contact us to modify or access your information</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        5. Changes to This Policy
      </h2>
      <p className="mb-4">
        We may update our Privacy Policy from time to time. We will notify you
        of any changes by posting the new policy on this page.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">6. Contact Us</h2>
      <p>
        If you have any questions or concerns about this policy, please contact
        us at{" "}
        <a
          href="mailto:support@quickdocai.com"
          className="text-blue-600 underline"
        >
          ahmednuman.topup@gmail.com
        </a>
        .
      </p>
    </div>
  );
};

export default PrivacyPolicy;
