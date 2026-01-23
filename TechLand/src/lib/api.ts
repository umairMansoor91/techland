const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://thetechland.com/api';

export interface DeveloperApplicationData {
  full_name: string;
  email: string;
  phone: string;
  years_of_experience: number;
  position: string;
  work_mode: string;
  available_from: string;
  notice_period?: string;
  primary_skills: string;
  programming_languages: string;
  frameworks: string;
  portfolio_url?: string;
  github_url?: string;
  linkedin_url?: string;
  resume?: File;
  english_proficiency: string;
  cover_letter?: string;
  willing_to_relocate: boolean;
  honeypot?: string;
  recaptcha_token?: string;
}

export interface ClientInquiryData {
  full_name: string;
  company_name: string;
  email: string;
  phone: string;
  country: string;
  company_size: string;
  industry: string;
  project_type: string;
  budget_range: string;
  timeline: string;
  project_description: string;
  website?: string;
  additional_notes?: string;
  referral_source?: string;
  honeypot?: string;
  recaptcha_token?: string;
}

export interface ApiResponse {
  message: string;
  inquiry_id?: number;
  application_id?: number;
  errors?: Record<string, string[]>;
}

export async function submitClientInquiry(data: ClientInquiryData): Promise<ApiResponse> {
  const response = await fetch(`${API_BASE_URL}/inquiries/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(
      result.errors
        ? Object.values(result.errors).flat().join(', ')
        : 'Failed to submit inquiry'
    );
  }

  return result;
}

export async function submitDeveloperApplication(data: DeveloperApplicationData): Promise<ApiResponse> {
  // Use FormData for file upload support
  const formData = new FormData();

  Object.entries(data).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== '') {
      if (value instanceof File) {
        formData.append(key, value);
      } else if (typeof value === 'boolean') {
        formData.append(key, value ? 'true' : 'false');
      } else {
        formData.append(key, String(value));
      }
    }
  });

  const response = await fetch(`${API_BASE_URL}/applications/`, {
    method: 'POST',
    // Don't set Content-Type header - browser will set it with boundary for FormData
    body: formData,
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(
      result.errors
        ? Object.values(result.errors).flat().join(', ')
        : 'Failed to submit application'
    );
  }

  return result;
}

export const COMPANY_SIZE_OPTIONS = [
  { value: '1-10', label: '1-10 employees' },
  { value: '11-50', label: '11-50 employees' },
  { value: '51-200', label: '51-200 employees' },
  { value: '201-500', label: '201-500 employees' },
  { value: '500+', label: '500+ employees' },
];

export const INDUSTRY_OPTIONS = [
  { value: 'healthcare', label: 'Healthcare' },
  { value: 'finance', label: 'Finance & Banking' },
  { value: 'ecommerce', label: 'E-Commerce & Retail' },
  { value: 'education', label: 'Education' },
  { value: 'real_estate', label: 'Real Estate' },
  { value: 'logistics', label: 'Logistics & Supply Chain' },
  { value: 'manufacturing', label: 'Manufacturing' },
  { value: 'technology', label: 'Technology' },
  { value: 'media', label: 'Media & Entertainment' },
  { value: 'government', label: 'Government' },
  { value: 'nonprofit', label: 'Non-Profit' },
  { value: 'other', label: 'Other' },
];

export const PROJECT_TYPE_OPTIONS = [
  { value: 'mvp', label: 'MVP Development' },
  { value: 'web_app', label: 'Web Application' },
  { value: 'mobile_app', label: 'Mobile Application' },
  { value: 'ai_ml', label: 'AI/ML Solution' },
  { value: 'digital_transformation', label: 'Digital Transformation' },
  { value: 'cloud_migration', label: 'Cloud Migration' },
  { value: 'consulting', label: 'Technical Consulting' },
  { value: 'maintenance', label: 'Maintenance & Support' },
  { value: 'other', label: 'Other' },
];

export const BUDGET_RANGE_OPTIONS = [
  { value: 'under_10k', label: 'Under $10,000' },
  { value: '10k_25k', label: '$10,000 - $25,000' },
  { value: '25k_50k', label: '$25,000 - $50,000' },
  { value: '50k_100k', label: '$50,000 - $100,000' },
  { value: '100k_250k', label: '$100,000 - $250,000' },
  { value: '250k_plus', label: '$250,000+' },
  { value: 'undecided', label: 'Not decided yet' },
];

export const TIMELINE_OPTIONS = [
  { value: 'asap', label: 'ASAP' },
  { value: '1_month', label: 'Within 1 month' },
  { value: '1_3_months', label: '1-3 months' },
  { value: '3_6_months', label: '3-6 months' },
  { value: '6_plus_months', label: '6+ months' },
  { value: 'flexible', label: 'Flexible' },
];

export const REFERRAL_SOURCE_OPTIONS = [
  { value: 'google', label: 'Google Search' },
  { value: 'linkedin', label: 'LinkedIn' },
  { value: 'referral', label: 'Referral' },
  { value: 'social_media', label: 'Social Media' },
  { value: 'clutch', label: 'Clutch' },
  { value: 'event', label: 'Event/Conference' },
  { value: 'other', label: 'Other' },
];

export const POSITION_OPTIONS = [
  { value: 'senior_frontend', label: 'Senior Frontend Developer' },
  { value: 'backend_python', label: 'Backend Developer (Python)' },
  { value: 'fullstack', label: 'Full Stack Developer' },
  { value: 'react_native', label: 'React Native Developer' },
  { value: 'devops', label: 'DevOps Engineer' },
  { value: 'ml_engineer', label: 'AI/ML Engineer' },
  { value: 'qa_engineer', label: 'QA Engineer' },
  { value: 'ui_ux', label: 'UI/UX Designer' },
  { value: 'project_manager', label: 'Technical Project Manager' },
  { value: 'data_engineer', label: 'Data Engineer' },
  { value: 'security_engineer', label: 'Security Engineer' },
  { value: 'cloud_architect', label: 'Cloud Solutions Architect' },
];

export const WORK_MODE_OPTIONS = [
  { value: 'remote', label: 'Full Remote' },
  { value: 'hybrid', label: 'Hybrid' },
  { value: 'onsite', label: 'On-site' },
];

export const ENGLISH_PROFICIENCY_OPTIONS = [
  { value: 'basic', label: 'Basic' },
  { value: 'intermediate', label: 'Intermediate' },
  { value: 'advanced', label: 'Advanced' },
  { value: 'fluent', label: 'Fluent/Native' },
];

// Client Portal API

export interface ClientLoginResponse {
  token: string;
  company_name: string;
  message: string;
}

export interface TalentProfile {
  id: number;
  display_name: string;
  position: string;
  position_display: string;
  years_of_experience: number;
  work_mode: string;
  work_mode_display: string;
  english_proficiency: string;
  english_proficiency_display: string;
  skills: string[];
  languages: string[];
  tools: string[];
  available_from: string;
  willing_to_relocate: boolean;
  portfolio_url?: string;
  github_url?: string;
  linkedin_url?: string;
  cover_letter?: string;
}

export interface TalentPoolResponse {
  count: number;
  talent: TalentProfile[];
}

export interface TalentFilters {
  positions: { value: string; label: string }[];
  work_modes: { value: string; label: string }[];
  experience_levels: { value: number; label: string }[];
}

export async function clientLogin(email: string, password: string): Promise<ClientLoginResponse> {
  const response = await fetch(`${API_BASE_URL}/clients/login/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.error || 'Login failed');
  }

  return result;
}

export async function clientLogout(token: string): Promise<void> {
  await fetch(`${API_BASE_URL}/clients/logout/`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });
}

export async function getTalentPool(
  token: string,
  filters?: {
    position?: string;
    work_mode?: string;
    min_experience?: number;
    skill?: string;
  }
): Promise<TalentPoolResponse> {
  const params = new URLSearchParams();
  if (filters?.position) params.append('position', filters.position);
  if (filters?.work_mode) params.append('work_mode', filters.work_mode);
  if (filters?.min_experience) params.append('min_experience', filters.min_experience.toString());
  if (filters?.skill) params.append('skill', filters.skill);

  const url = `${API_BASE_URL}/clients/talent/${params.toString() ? '?' + params.toString() : ''}`;

  const response = await fetch(url, {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.error || 'Failed to fetch talent pool');
  }

  return result;
}

export async function getTalentFilters(token: string): Promise<TalentFilters> {
  const response = await fetch(`${API_BASE_URL}/clients/talent/filters/`, {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.error || 'Failed to fetch filters');
  }

  return result;
}

export interface TalentDetailMetrics {
  total_skills: number;
  skill_categories: number;
  experience_level: string;
  availability_status: string;
}

export interface TalentDetail extends TalentProfile {
  notice_period?: string;
  cover_letter?: string;
  metrics: TalentDetailMetrics;
}

export async function getTalentDetail(token: string, talentId: number): Promise<TalentDetail> {
  const response = await fetch(`${API_BASE_URL}/clients/talent/${talentId}/`, {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.error || 'Failed to fetch talent details');
  }

  return result;
}
