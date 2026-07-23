import axios, { AxiosError } from "axios";
import type { AxiosInstance } from "axios";
// ==========================================
// 1. Core WordPress TypeScript Interfaces
// ==========================================

export interface WPRenderedText {
  rendered: string;
}

export interface WPMediaDetails {
  source_url: string;
  [key: string]: any; // Catch-all for extra WP media meta properties if needed
}

export interface WPEmbedded {
  "wp:featuredmedia"?: Array<{
    id: number;
    source_url: string;
    media_details?: any;
    [key: string]: any;
  }>;
}

// Generic structure shared by most Custom Post Types (Careers, Case Studies)
export interface WPCustomPost {
  id: number;
  date: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: WPRenderedText;
  content: WPRenderedText;
  excerpt: WPRenderedText;
  _embedded?: WPEmbedded;
}

// Specific mapping for Media endpoints
export interface WPMediaResponse {
  id: number;
  date: string;
  slug: string;
  type: string;
  link: string;
  title: WPRenderedText;
  source_url: string;
  media_details: WPMediaDetails;
  mime_type: string;
}



// ==========================================
// 2. Axios Client Initialization
// ==========================================

const wpAPI: AxiosInstance = axios.create({
  baseURL: "https://ahaan-admin.ahaanmedia.com/wp-json/wp/v2",
  timeout: 30000,
  headers: {
    Accept: "application/json",
  },
});

const WordpressAPI = wpAPI;

// Helper to reliably extract error messages safely in TypeScript
const getErrorMessage = (error: unknown): string => {
  if (error instanceof AxiosError) return error.message;
  if (error instanceof Error) return error.message;
  return String(error);
};

// ==========================================
// 3. Careers API
// ==========================================

export const getAllCareers = async (): Promise<WPCustomPost[]> => {
  try {
    const response = await wpAPI.get<WPCustomPost[]>("/career?_embed");
    return response.data || [];
  } catch (error) {
    console.error("❌ Error fetching careers:", getErrorMessage(error));
    return [];
  }
};

export const getCareerBySlug = async (slug: string): Promise<WPCustomPost | null> => {
  try {
    const response = await wpAPI.get<WPCustomPost[]>(`/career?slug=${slug}&_embed`);
    return response.data?.[0] || null;
  } catch (error) {
    console.error("❌ Error fetching career details:", getErrorMessage(error));
    return null;
  }
};

// ==========================================
// 4. Case Studies API
// ==========================================

export const getAllCaseStudies = async (): Promise<WPCustomPost[]> => {
  try {
    const response = await wpAPI.get<WPCustomPost[]>("/case-studies?_embed");
    return response.data || [];
  } catch (error) {
    console.error("❌ Error fetching case studies:", getErrorMessage(error));
    return [];
  }
};

export const getCaseStudyBySlug = async (slug: string): Promise<WPCustomPost | null> => {
  try {
    const response = await wpAPI.get<WPCustomPost[]>(`/case-studies?slug=${slug}&_embed`);
    return response.data?.[0] || null;
  } catch (error) {
    console.error("❌ Error fetching case study:", getErrorMessage(error));
    return null;
  }
};

// ==========================================
// 5. Media API
// ==========================================

export const getMediaById = async (id: number | string): Promise<WPMediaResponse | null> => {
  try {
    const response = await wpAPI.get<WPMediaResponse>(`/media/${id}`);
    return response.data || null;
  } catch (error) {
    console.error("❌ Error fetching media:", getErrorMessage(error));
    return null;
  }
};

// ==========================================
// 6. Policies API
// ==========================================

export const getPolicies = async (): Promise<WPCustomPost[]> => {
  try {
    const response = await wpAPI.get<WPCustomPost[]>("/policies?_embed");
    return response.data || [];
  } catch (error) {
    console.error("❌ Error fetching policies:", getErrorMessage(error));
    return [];
  }
};

export const getPolicyBySlug = async (
  slug: string
): Promise<WPCustomPost | null> => {
  try {
    const response = await wpAPI.get<WPCustomPost[]>(
      `/policies?slug=${slug}&_embed`
    );
    return response.data?.[0] || null;
  } catch (error) {
    console.error("❌ Error fetching policy:", getErrorMessage(error));
    return null;
  }
};

export default WordpressAPI;