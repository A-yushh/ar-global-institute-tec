// Auth Service in TypeScript
import { mockDelay } from './axiosInstance';

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  phone: string;
  mobile?: string;
  role: string;
  enrolledBatches: string[];
  avatar: string;
  studentClass?: string;
  dob?: string;
  gender?: string;
}

export interface SignInCredentials {
  identifier: string;
  password?: string;
  rememberMe?: boolean;
}

export interface SignUpFormData {
  fullName: string;
  email: string;
  mobile: string;
  studentClass: string;
  dob: Date | string | null;
  gender: string;
  password?: string;
  confirmPassword?: string;
  terms?: boolean;
}

export interface AuthResponse {
  success: boolean;
  message: string;
  user: UserProfile;
  token: string;
}

export interface ForgotPasswordResponse {
  success: boolean;
  message: string;
}

export const authService = {
  async signIn({ identifier, rememberMe }: SignInCredentials): Promise<AuthResponse> {
    await mockDelay(600);

    const mockUser: UserProfile = {
      id: 'usr_' + Math.random().toString(36).substring(2, 9),
      name: identifier.includes('@') ? identifier.split('@')[0] : 'Student Member',
      email: identifier.includes('@') ? identifier : `${identifier}@student.arglobal.edu`,
      phone: identifier.includes('@') ? '9876543210' : identifier,
      role: 'student',
      enrolledBatches: ['batch-jee-adv-elite'],
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80',
    };

    const token = 'mock_jwt_token_' + Date.now();
    if (rememberMe) {
      localStorage.setItem('ar_auth_token', token);
      localStorage.setItem('ar_user', JSON.stringify(mockUser));
    }

    return {
      success: true,
      message: 'Signed in successfully!',
      user: mockUser,
      token,
    };
  },

  async signUp(formData: SignUpFormData): Promise<AuthResponse> {
    await mockDelay(800);

    const mockUser: UserProfile = {
      id: 'usr_' + Math.random().toString(36).substring(2, 9),
      name: formData.fullName,
      email: formData.email,
      phone: formData.mobile,
      mobile: formData.mobile,
      studentClass: formData.studentClass,
      dob: formData.dob ? new Date(formData.dob).toISOString().split('T')[0] : '',
      gender: formData.gender,
      role: 'student',
      enrolledBatches: [],
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80',
    };

    const token = 'mock_jwt_token_' + Date.now();
    localStorage.setItem('ar_auth_token', token);
    localStorage.setItem('ar_user', JSON.stringify(mockUser));

    return {
      success: true,
      message: 'Registration successful! Welcome to A. R. Global Institute.',
      user: mockUser,
      token,
    };
  },

  async forgotPassword({ identifier }: { identifier: string }): Promise<ForgotPasswordResponse> {
    await mockDelay(600);
    return {
      success: true,
      message: `Password reset link has been dispatched to ${identifier}. Please check your inbox / SMS.`,
    };
  },

  async signOut(): Promise<{ success: boolean }> {
    await mockDelay(200);
    localStorage.removeItem('ar_auth_token');
    localStorage.removeItem('ar_user');
    return { success: true };
  },

  getCurrentUser(): UserProfile | null {
    try {
      const stored = localStorage.getItem('ar_user');
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  },
};

export default authService;
