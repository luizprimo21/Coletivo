/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface NavItem {
  id: string;
  label: string;
  children?: NavItem[];
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  image?: string;
  excerpt: string;
}

export interface EventItem {
  id: string;
  title: string;
  date: string;
  link: string;
  thumbnail?: string;
  description: string;
}

export interface ArchiveItem {
  id: string;
  title: string;
  type: 'livro' | 'documento';
  author: string;
  year?: string;
  link?: string;
  content?: string;
}

export interface PartnerItem {
  id: string;
  name: string;
  logo?: string;
  link: string;
  description?: string;
  email?: string;
  instagram?: string;
  facebook?: string;
  spotify?: string;
}
