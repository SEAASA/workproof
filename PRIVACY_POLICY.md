# WorkProof Privacy Policy

**Effective Date:** November 13, 2026  
**Last Updated:** November 23, 2026  
**Company / Developer:** SEAASA PRIVATE LIMITED ("Company", "we", "us", or "our")  
**Application:** WorkProof: GPS Geotag Camera & Inspection Reports ("WorkProof", "App")  
**App Store Distribution:** Google Play Store

---

## 1. Introduction and Scope

Welcome to **WorkProof**. This Privacy Policy governs your use of the WorkProof mobile application, our on-device camera and PDF inspection reporting engines, AI-assisted image generation features, cloud backup integrations, and advertising networks.

We believe in radical transparency and a **privacy-by-default, local-first architecture**. WorkProof is engineered so that your standard site photographs, GPS coordinates, timestamps, watermarks, inspection declarations, and PDF audit reports remain private, secure, and stored directly on your personal mobile device.

By installing, accessing, or using WorkProof—including capturing geotagged photos, editing manual Before & After collages, submitting imagery to the AI Before & After / renovation transformation generator, compiling inspection reports, or connecting your Google Drive account—you acknowledge and agree to the data collection and processing practices described in this Privacy Policy.

If you do not agree with this Privacy Policy, you must discontinue using WorkProof and uninstall the Application.

---

## 2. Architecture: Local-First Processing & Zero Server Media Archival

### 2.1. Local-First On-Device Storage
WorkProof operates primarily on a **device-centric, local-first model**:
- All high-resolution photographs, videos, audio notes, GPS telemetry, watermark data, custom stamps, signatures, and compiled PDF reports are saved directly within the Application's private sandbox storage on your Android device.
- **We do not upload, host, or archive your photos, videos, or PDF inspection reports on private company servers or third-party cloud object storage buckets.**

### 2.2. Secure Map Tile Proxying
To render satellite, street, and terrain map backgrounds on geotagged stamps without embedding or exposing private third-party API keys within the mobile application package:
- Map tile requests (latitude, longitude, zoom level, and visual style) may route through a secure proxy worker hosted on Cloudflare's network.
- **Zero Media Exposure:** This proxy processes only geographic coordinate numbers and zoom levels to fetch corresponding map tiles from mapping providers. **No user photographs, videos, personal documents, device identifiers, or user identities are ever transmitted through, cached, or stored on this proxy.**

---

## 3. Information We Collect and Process

### 3.1. Camera, Media, and Sensor Data (Processed Locally)
When you capture photos, record videos, or conduct site audits using WorkProof, the Application processes:
- **High-Resolution Imagery & Video:** Captured via your device's camera hardware and stored locally.
- **Embedded Geospatial Coordinates (GNSS/GPS):** Latitude, longitude, altitude, horizontal and vertical accuracy metrics, speed, and satellite fix state.
- **Compass & Orientation Sensors:** Azimuth heading degrees (magnetic and true north), pitch, roll, and device tilt.
- **Environmental & Device Metadata:** Timestamp (local time and Coordinated Universal Time / UTC), battery level, network connectivity type, device manufacturer, model, and Android OS version.
- **Integrity & Anti-Tamper Telemetry:** Integrity checks detecting mock location providers, developer options, root binaries, and SHA-256 origin checksum hashes to ensure audit authenticity.

### 3.2. Before & After Visuals: Manual In-App Editor vs. AI Renovation Transformation
WorkProof provides visual "Before & After" features to document job site progress, property renovations, construction stages, and completed repairs:

#### A. Manual In-App Photo Editor (100% On-Device Processing)
- **Local Rendering:** Creating manual side-by-side comparisons, multi-photo collage layouts, perspective crop alignments, and custom watermark overlays is processed **100% locally on your device** using Android's native graphics engine.
- **Zero Cloud Transmission:** Photos edited solely within the manual collage editor are **never** uploaded to external servers or cloud storage for rendering.
- **No Machine Learning or AI Model Training:** Imagery processed via the manual editor is **never** used to train, retrain, benchmark, or refine artificial intelligence or computer vision models.

#### B. AI Before & After / Renovation Transformation Generation
- **Automated AI Visualizations:** WorkProof allows users to generate automated visual transformations (such as modern facade updates, architectural renovation mockups, and Before & After renovation showcases) directly from a photo.
- **Transmission to Third-Party AI Providers:** When you choose to use the AI image generation feature instead of manual editing, the photo you submit is transmitted securely via TLS encryption to our third-party artificial intelligence infrastructure provider(s) to compute the generative transformation and return the composite "After" result.
- **AI Model Training Notice:** As detailed in Section 4, the third-party AI provider powering generative image creation may utilize submitted photos to train, evaluate, and refine their generative vision models. General camera photos, PDF reports, and Google Drive files are strictly excluded from AI processing.

### 3.3. Google Drive Login, File Access, Shared Folders, and Colleague Image Verification
WorkProof allows you to connect your Google Account to automatically back up your geotagged inspection evidence and to collaborate with colleagues, team members, and project supervisors.

#### A. Scopes and Permissions Requested
When you sign in using Google Sign-In and authorize Google Drive integration, WorkProof requests authorization under the following two OAuth2 scopes:
- **`https://www.googleapis.com/auth/drive.file`**:
  - **Purpose:** Grants permission to create, upload, organize, edit, and store geotagged photos, personal camera photos (if enabled by you), and stamped PDF inspection reports generated by WorkProof directly in your dedicated Google Drive backup folder (by default named `[Your Name]'s WorkProof` or `WorkProof Images & Reports`).
  - **Scope Limitation:** This permission is strictly restricted to files, folders, and documents created or opened by WorkProof. It does not grant general access to unrelated files or documents in your Google Drive.
- **`https://www.googleapis.com/auth/drive.readonly`**:
  - **Purpose:** Grants read-only permission to list, search, view, preview, and retrieve metadata and media content from Google Drive folders and files that colleagues, team members, supervisors, or external project partners have explicitly shared with your Google Account (via Google Drive's "Shared with me" section, a direct Google Drive folder sharing link, or a shared folder ID).
  - **Scope Limitation:** This permission is strictly read-only. WorkProof cannot edit, rename, delete, move, or overwrite any files or folders in your colleagues' Google Drives.

#### B. Primary Uses of Google Drive Data: Cloud Backup, Team Shared Folders & Evidence Verification
We access, process, and display your Google Drive data strictly for user-directed, user-facing productivity features:
1. **Automated Cloud Backup & Organized Storage (`drive.file`)**:
   - Automatically or manually uploading, organizing, and maintaining a secure, real-time cloud archive of all geotagged photos, site images, and PDF audit reports created using WorkProof.
   - Categorizing your inspection assets into designated cloud folders (e.g., `Images/`, `PDF Reports/`, `PDF Photo Reports/`, `PDF Checklist Reports/`, and `Personal Photos/`) within your personal Google Drive account.
2. **Adding Colleague & Team Shared Folders (`drive.readonly`)**:
   - WorkProof enables field teams to collaborate seamlessly by allowing you to add, connect, and bookmark Google Drive folders shared with you by colleagues, project supervisors, or subcontracting partners.
   - You can connect shared folders directly from the list of folders shared with your Google Account, or by pasting a valid Google Drive folder link or folder ID.
3. **Viewing, Checking, and Verifying Colleagues' Photos & Inspection Media**:
   - **Viewing Colleague Evidence:** When colleagues or team members capture site photos and upload them to a shared project folder in Google Drive, WorkProof enables you to browse and view their photos and reports directly inside the App without switching to external file managers or desktop browsers.
   - **Detailed Inspection & Verification:** Lead inspectors, project managers, quality control (QA/QC) engineers, and team collaborators can inspect the high-resolution images, check GPS location coordinates, view timestamps, examine compass bearings, and review stamped site watermarks captured by colleagues.
   - **Quality Assurance & Verification Audits:** This capability ensures field supervisors can verify that field tasks were completed at the authentic job site coordinates, check progress against architectural blueprints or historical photos, and validate photographic evidence before approving work or signing inspection declarations.
   - **Selective Synchronization & Offline Availability:** You can selectively sync and cache specific colleagues' photos from the shared Google Drive folder to your local device sandbox so you can review and verify site evidence on-site in low-connectivity or remote environments.
   - **Non-Destructive Read-Only Integrity:** Because shared folder access operates strictly under `drive.readonly`, the App only reads and displays colleagues' images. It is technologically impossible for WorkProof to modify, delete, overwrite, or corrupt any original photos or documents located in your colleagues' Drive accounts.

#### C. Google API Services User Data Policy & Limited Use Disclosure
> [!IMPORTANT]
> **GOOGLE LIMITED USE COMPLIANCE STATEMENT:**  
> **WorkProof's use and transfer to any other app of information received from Google APIs will adhere to the [Google API Services User Data Policy](https://developers.google.com/terms/api-services-user-data-policy), including the Limited Use requirements.**
> 
> Specifically:
> - **Strict Feature Functionality:** Google Drive data (both your personal backup files and colleagues' shared files) is accessed strictly to provide cloud backup, folder browsing, image viewing, and site evidence verification within the WorkProof application.
> - **No Advertising Use:** We never use, transfer, sell, or disclose Google Drive user data, file metadata, or colleague photos to third-party advertising networks, data brokers, or information resellers.
> - **No AI Model Training on Drive Data:** **Files, photos, inspection reports, and documents accessed from or stored to Google Drive via Google APIs (including all images viewed or verified from colleagues' shared folders) are NEVER used to train, retrain, or fine-tune artificial intelligence or machine learning models.**
> - **No Human Review:** No human employees, contractors, or agents of WorkProof read, view, or inspect your Google Drive files or colleagues' photos unless you provide explicit affirmative consent for technical troubleshooting, it is necessary to investigate severe security incidents, or it is strictly required by applicable legal process.
> - **User Control & Revocation:** You can revoke WorkProof's access to your Google Drive at any time via the in-app **Google Drive Sync → Disconnect / Log Out** button, or directly in your [Google Account Third-Party Permissions](https://myaccount.google.com/permissions). Revocation immediately terminates all cloud connectivity, shared folder access, and synchronization tokens.

### 3.4. Advertising Identifiers and Ad Tracking (Free Tier)
WorkProof's free tier displays third-party mobile advertisements powered by **Google AdMob / Google Mobile Ads SDK**:
- **Advertising Identifiers:** Google Advertising ID (GAID / AAID).
- **Device & Network Telemetry:** IP address, cellular carrier/ISP, coarse geographic location (country/region), language settings, screen density, and device brand.
- **Ad Interaction Events:** Ad impressions, click-through events, and video completion events.

### 3.5. In-App Purchases, Subscriptions, and Google Play Billing
WorkProof offers optional paid digital items, including the "Ad Removal" ("Remove Ads") purchase and feature unlocks via Google Play:
- Transactions are processed entirely by the **Google Play Store (Google Play Billing API)**.
- WorkProof receives only transaction confirmation tokens, order IDs, timestamps, and product SKU identifiers.
- **We never receive, handle, process, or store your credit card, debit card, bank account, or financial credentials.**

---

## 4. Artificial Intelligence (AI) Models and Data Training Disclosures

> [!WARNING]
> **CRITICAL DISCLOSURE REGARDING PHOTOS SUBMITTED TO THE AI TRANSFORMATION GENERATOR:**  
> **PHOTOGRAPHS EXPLICITLY SUBMITTED TO GENERATE AI BEFORE & AFTER / RENOVATION TRANSFORMATION IMAGES MAY BE PROCESSED AND USED BY THIRD-PARTY ARTIFICIAL INTELLIGENCE PROVIDERS TO TRAIN, EVALUATE, BENCHMARK, AND REFINE MACHINE LEARNING MODELS.**

### 4.1. Specific Scope: AI Transformation Generation
WorkProof offers an AI-powered visual transformation feature that allows users to automatically generate renovation comparisons, modern styling concepts, and visual site transformations (e.g., transforming a baseline property photo into a completed renovation concept) without manual editing.

When you choose to use the AI transformation tool:
1. **User-Initiated Submission:** The specific photograph you select is transmitted securely across encrypted network connections (TLS 1.3 / HTTPS) to our third-party AI service provider(s).
2. **Third-Party Model Training:** The artificial intelligence models and vision neural networks operated by our AI providers may use submitted photographs and perspective alignments to train, retrain, fine-tune, evaluate, and improve their generative vision and machine learning algorithms, subject to their respective terms and data governance practices.

### 4.2. Media Strictly Excluded from AI Training
To protect your privacy and ensure full compliance with platform developer standards:
- **Standard Geotag Camera Captures:** Everyday site photos, videos, audio notes, and inspection documentation captured with WorkProof are stored locally and are **NEVER** transmitted to AI providers or used for AI model training.
- **Manual In-App Editor:** Photos edited using the manual Before & After collage editor remain entirely on your device and are **NEVER** used for AI training.
- **Google Drive Files & Colleague Media:** In strict adherence to the [Google API Services User Data Policy](https://developers.google.com/terms/api-services-user-data-policy), **all files, photos, and reports accessed from or stored to Google Drive (including colleagues' shared folders) are 100% EXCLUDED from AI processing and are NEVER used to train, retrain, or improve artificial intelligence or machine learning models.**

### 4.3. User Discretion Regarding Proprietary or Confidential Sites
If you are inspecting or documenting classified infrastructure, proprietary architectural blueprints, confidential industrial equipment, or private facilities where external cloud processing or algorithmic training is prohibited, **do not submit those photographs to the AI transformation generator**. You should use WorkProof's 100% on-device manual Before & After photo editor for all confidential visual comparisons.

---

## 5. How We Use and Disclose Information

We process information strictly for the following operational, commercial, and technical purposes:
1. **Core Application Functions:** Capturing photos/videos, stamping verifiable GPS coordinates and timestamps, compiling PDF reports, and storing them locally on your device.
2. **On-Device Manual Before & After Compositions:** Aligning, cropping, and exporting visual Before & After progress collages directly on your device.
3. **AI Renovation Transformation Generation:** Transmitting user-selected photos to third-party AI providers to generate automated visual renovation comparisons as described in Section 4.
4. **User-Directed Google Drive Sync & Colleague Verification:** Backing up your media to your personal Google Drive (`drive.file`) and enabling read-only viewing and verification of colleagues' shared project folders (`drive.readonly`).
5. **Third-Party Advertising (Free Tier):** Displaying contextual or personalized banner and interstitial ads via Google AdMob to free-tier users.
6. **In-App Purchase Fulfillment:** Validating purchases of "Ad Removal" through Google Play Billing.
7. **Legal Compliance & Authenticity:** Ensuring anti-tamper telemetry and cryptographic SHA-256 origin checksum hashes function accurately for site audit compliance.

---

## 6. Advertisements, In-App Purchases, and Your Rights to Opt-Out

### 6.1. Ad-Supported Free Tier
By default, free installations of WorkProof display third-party advertisements via Google AdMob. These ads may collect your Google Advertising ID (GAID) to serve relevant advertisements.

### 6.2. Ad Removal ("Remove Ads") Purchase
You can eliminate all third-party banner and interstitial advertisements by purchasing the **"Ad Removal" ("Remove Ads")** option within the Application via Google Play:
- Upon verification of payment, all ad banners, interstitials, and third-party advertising SDK initialization sequences are permanently suppressed.
- No further advertising identifiers (GAID) are collected or shared with ad networks by WorkProof on that device/account.

### 6.3. Operating System Opt-Out Controls
Regardless of whether you purchase Ad Removal, you can restrict ad personalization across your entire Android device:
- Navigate to **Settings → Google → Ads** (or **Settings → Privacy → Ads**).
- Select **"Delete advertising ID"** or toggle **"Opt out of Ads Personalization"**.

---

## 7. Third-Party Service Providers

We integrate strictly with vetted third-party infrastructure and service providers:

| Provider | Category | Purpose | Privacy Policy / Terms |
| :--- | :--- | :--- | :--- |
| **Google LLC (AdMob)** | Mobile Advertising | Serving banner and interstitial advertisements on free tier | [Google Ads Privacy](https://policies.google.com/technologies/ads) |
| **Google LLC (Play Services)** | Billing & APIs | In-App purchases, Play Integrity, licensing | [Google Play Privacy](https://policies.google.com/privacy) |
| **Google LLC (Drive API)** | Cloud Storage & Collaboration | User-directed photo/PDF backups (`drive.file`) and viewing/verifying colleagues' shared project folders (`drive.readonly`) | [Google Drive API Terms](https://developers.google.com/drive/terms) |
| **Cloudflare, Inc.** | API Security & CDN | Secure proxy for map tile requests; zero user media or photos are transmitted or stored | [Cloudflare Privacy Policy](https://www.cloudflare.com/privacypolicy/) |
| **Third-Party AI Service Provider(s)** | Generative AI & Vision | Generating automated visual renovation transformations; submitted photos may be processed and used for model training | Provider-specific terms apply |
| **OpenStreetMap / Mapbox** | Mapping & Cartography | Supplying satellite, street, and terrain map background tiles | [OSMF Privacy](https://wiki.osmfoundation.org/wiki/Privacy_Policy) |

---

## 8. Data Retention, Storage, and International Data Transfers

### 8.1. Local Device Retention
All photos, inspection drafts, and PDF files stored in your local app sandbox remain on your device until manually deleted by you or cleared when the Application is uninstalled.

### 8.2. Zero Server Archival
Because WorkProof does not operate media servers or cloud storage buckets for your photos, we do not store, retain, or host your raw inspection imagery on our servers. Your data is stored either locally on your device or in your personal Google Drive account.

### 8.3. International Data Transfers
When using Google Drive Sync or viewing online map tiles, data is transferred securely between your device and Google's or map providers' distributed data centers in accordance with their respective enterprise privacy standards.

---

## 9. Security Safeguards

We implement administrative, technical, and physical security measures to safeguard data:
- **Sandbox Isolation:** All photos, inspection drafts, and credentials are kept within Android's sandboxed application storage, isolated from other installed applications.
- **Hardware-Level Encryption:** Data on modern Android devices is encrypted at rest using Android's file-based encryption (FBE / AES-256).
- **Encrypted Transmission:** All communications with Google Drive APIs and mapping proxy endpoints utilize modern Transport Layer Security (TLS 1.3 / HTTPS).
- **Cryptographic Audit Proof:** Geotagged images include deterministic SHA-256 origin checksum hashes to ensure tampering or modifications can be mathematically detected.

---

## 10. Children's Privacy

WorkProof is intended solely for adults, professionals, contractors, engineers, and enterprise users. It is **not designed or directed to children under 13 years of age** (or under 16 in jurisdictions where higher thresholds apply). We do not knowingly collect personal data from children.

---

## 11. Your Privacy Rights (GDPR, CCPA/CPRA, and Regional Laws)

Subject to applicable statutory requirements:
- **Right to Access & Portability:** You can review, export, and copy your photos, PDFs, and local databases directly within the App at any time.
- **Right to Deletion:** You can delete photos and reports from your device and Google Drive at any time.
- **Right to Opt-Out of Ads:** You may purchase Ad Removal or configure your Android advertising identifier settings to limit tracking.

---

## 12. Modifications to This Privacy Policy

We reserve the right to amend or update this Privacy Policy at our sole discretion. When material modifications occur, we will update the "Last Updated" timestamp at the top of this document and provide notice within the WorkProof application.

Your continued use of WorkProof following the posting of an updated Privacy Policy constitutes your agreement to all updated terms.

---

## 13. Contact Information

If you have questions, comments, or legal inquiries concerning this Privacy Policy, please contact us:

* **Company:** SEAASA PRIVATE LIMITED
* **Application:** WorkProof: GPS Geotag Camera & Inspection Reports
* **Registered Address:** 4/461, 2nd Floor, 197, Valamkottil Towers, Thrikkakara, Ernakulam, Ernakulam - 682021, Kerala, INDIA
* **Email:** [connect@seaasa.com](mailto:connect@seaasa.com)
* **Phone:** +91 7012337600
* **Website:** https://seaasa.com
