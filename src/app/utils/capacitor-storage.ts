import { Preferences } from '@capacitor/preferences';
import { KeyValueStorageInterface } from '@aws-amplify/core';

/**
 * Custom storage adapter for AWS Amplify that uses Capacitor Preferences
 * This ensures proper session persistence on mobile devices
 */
export class CapacitorStorage implements KeyValueStorageInterface {
  async setItem(key: string, value: string): Promise<void> {
    try {
      await Preferences.set({ key, value });
      console.log('📦 Storage SET:', key, `(${value.length} chars)`);
    } catch (error) {
      console.error('❌ Storage SET failed:', key, error);
      throw error;
    }
  }

  async getItem(key: string): Promise<string | null> {
    try {
      const { value } = await Preferences.get({ key });
      console.log('📦 Storage GET:', key, value ? `found (${value.length} chars)` : 'not found');
      return value;
    } catch (error) {
      console.error('❌ Storage GET failed:', key, error);
      return null;
    }
  }

  async removeItem(key: string): Promise<void> {
    try {
      await Preferences.remove({ key });
      console.log('📦 Storage REMOVE:', key);
    } catch (error) {
      console.error('❌ Storage REMOVE failed:', key, error);
    }
  }

  async clear(): Promise<void> {
    try {
      await Preferences.clear();
      console.log('📦 Storage CLEAR: all items removed');
    } catch (error) {
      console.error('❌ Storage CLEAR failed:', error);
    }
  }
}
