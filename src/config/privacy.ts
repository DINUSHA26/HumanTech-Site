import { PrivacyPolicySection } from '@/types';

export const PRIVACY_CONFIG = {
  title: 'PRIVACY POLICY & DATA PROTECTION NOTICE',
  lastUpdated: 'June 15, 2026',
  compliance: 'In Compliance with: Personal Data Protection Act (PDPA), No. 9 of 2022 of Sri Lanka.',
  introText: 'Welcome to HumanTec.lk (referred to as "the Company," "we," "us," or "our"). We act as the Data Controller for the personal information processed through our e-commerce platform and our mobile app ecosystem. Your privacy and the confidentiality of your family’s health data are sacred to us. This policy explains how we collect, use, store, and protect your information.',
};

export const PRIVACY_SECTIONS: PrivacyPolicySection[] = [
  {
    id: 'legal-basis',
    title: '1. Legal Basis for Data Processing',
    content: 'Under Section 5 of the PDPA, we process your personal and sensitive data only when a valid legal ground exists. These include:',
    subsections: [
      {
        content: 'Explicit Consent',
        bullets: ['When you explicitly opt-in to let us manage your care profile or health records.'],
      },
      {
        content: 'Contractual Necessity',
        bullets: ['To deliver products purchased online (e.g., Drmini Robo) or facilitate telemedicine sessions via Mydoctor.'],
      },
      {
        content: 'Vital Interests',
        bullets: ['Processing triggered during emergency SOS alerts to safeguard human life.'],
      },
      {
        content: 'Legal Compliance',
        bullets: ['Fulfilling statutory obligations under Sri Lankan medical and financial laws.'],
      },
    ],
  },
  {
    id: 'data-collected',
    title: '2. Types of Data We Collect',
    content: 'To provide a fully unified tech and healthcare ecosystem, we process data through two main streams:',
    subsections: [
      {
        title: 'A. Via the Online Web Store (General Personal Data)',
        content: 'When purchasing the Drmini Robo, Truehive products, or wellness devices, we collect:',
        bullets: [
          'Identity Data: Full name, delivery address, billing address, and phone numbers.',
          'Financial Data: Credit/debit card information and alternative payment timelines (processed securely via compliant gateways).',
          'Interaction Data: Order history, device telemetry from the Drmini Robo, and browser cookies.',
        ],
      },
      {
        title: 'B. Via the Mobile App Ecosystem (Special Categories of Personal Data)',
        content: 'Because our app handles health-related features, we process Special Categories of Personal Data under strict statutory safeguards:',
        bullets: [
          'Mydoctor: Medical history, symptoms, audio/video consultation feeds, and physical descriptions.',
          'My documents: Uploaded prescriptions, clinical test reports, lab results, and diagnostic files.',
          'My Help center & SOS: Real-time GPS location coordinates (critical for emergency SOS response) and support chat transcripts.',
        ],
      },
    ],
  },
  {
    id: 'use-data',
    title: '3. How We Use Your Data',
    content: 'We strictly limit the processing of data to the specified, explicit, and proportionate purpose for which it was gathered:',
    subsections: [
      {
        content: 'Purpose Boundaries',
        bullets: [
          'To process and ship orders for the Drmini Robo and curated wellness devices.',
          'To instantly link you with certified medical practitioners via Mydoctor.',
          'To route emergency coordinates to our 24/7 medical response desk and your predefined family contacts upon an SOS trigger.',
          'To provide an encrypted, secure digital folder for My documents.',
        ],
      },
    ],
  },
  {
    id: 'retention',
    title: '4. Data Retention Limits',
    content: 'In accordance with Section 9 of the PDPA, we do not store your data longer than necessary for its intended purpose.',
    subsections: [
      {
        content: 'Retention Thresholds',
        bullets: [
          'Web Store Data: Kept for as long as your account remains active or to meet local taxation/transaction laws.',
          'App Health Records (My documents): Maintained strictly for ongoing clinical continuity. If you request account deletion, all clinical and personal data will be permanently erased after a 30-day grace period, except where overridden by mandatory Sri Lankan medical record retention laws.',
        ],
      },
    ],
  },
  {
    id: 'security',
    title: '5. Data Security & Integrity',
    content: 'We apply industry-standard technical and organizational security measures to protect your information against unauthorized access, loss, or destruction:',
    subsections: [
      {
        content: 'Security Safeguards',
        bullets: [
          'End-to-End Encryption: Applied to all files uploaded to My documents and stream feeds inside Mydoctor.',
          'Access Controls: Restricted, credentialed access ensures that only you and your explicitly authorized medical practitioners can view sensitive health metrics.',
          'Breach Notification: In the highly unlikely event of a data breach, we are legally mandated to notify the Data Protection Authority of Sri Lanka and affected individuals without undue delay.',
        ],
      },
    ],
  },
  {
    id: 'rights',
    title: '6. Your Statutory Rights as a Data Subject',
    content: 'Under Part II of the Sri Lankan PDPA, you possess powerful rights regarding your personal and sensitive info:',
    subsections: [
      {
        content: 'Data Subject Rights',
        bullets: [
          'Right of Access: You can request a copy of all your personal data and health records held in our systems.',
          'Right to Rectification: You can instantly complete or correct inaccurate information across your profile.',
          'Right to Withdraw Consent: You may withdraw consent for data processing at any time (e.g., turning off push notifications or location tracking).',
          'Right to Erasure ("Right to be Forgotten"): You have the right to request total deletion of your profile if the data is no longer necessary or processing lacks a lawful basis.',
        ],
      },
    ],
  },
  {
    id: 'transfers',
    title: '7. Cross-Border Data Transfers',
    content: 'Your personal data is predominantly processed and secured within Sri Lanka. Any external server routing or cloud backup storage completely conforms to cross-border rules enforced by the Data Protection Authority of Sri Lanka, ensuring adequate data protection agreements are structurally instituted.',
  },
  {
    id: 'dpo',
    title: '8. Contact Our Data Protection Officer (DPO)',
    content: 'If you have any questions, concerns, or wish to file a request regarding your data privacy under the PDPA Act, please contact our designated DPO:',
    subsections: [
      {
        content: 'DPO Channels',
        bullets: [
          'Email: dpo@humantec.lk',
          'Address: HumanTec.lk Data Protection Office, Colombo, Sri Lanka.',
          'Help Desk: Accessible directly inside the app via My Help center.',
        ],
      },
    ],
  },
];
