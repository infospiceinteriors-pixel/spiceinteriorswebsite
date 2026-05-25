// Newsletter Management Utilities

import type { Item } from './data';

export interface Subscriber {
  id: string;
  email: string;
  source: string; // homepage, footer, shop, item-detail
  timestamp: string;
  status: 'active' | 'unsubscribed';
}

// Local Storage Management (for testing/development)
export const getSubscribers = (): Subscriber[] => {
  try {
    const subscribers = localStorage.getItem('newsletter_subscribers');
    return subscribers ? JSON.parse(subscribers) : [];
  } catch (error) {
    console.error('Error getting subscribers:', error);
    return [];
  }
};

export const addSubscriber = (email: string, source: string): Subscriber => {
  const subscribers = getSubscribers();
  
  // Check if email already exists
  if (subscribers.some(sub => sub.email === email && sub.status === 'active')) {
    throw new Error('Email already subscribed');
  }

  const newSubscriber: Subscriber = {
    id: Date.now().toString(),
    email,
    source,
    timestamp: new Date().toISOString(),
    status: 'active'
  };

  const updatedSubscribers = [...subscribers, newSubscriber];
  localStorage.setItem('newsletter_subscribers', JSON.stringify(updatedSubscribers));
  
  return newSubscriber;
};

export const getSubscriberStats = () => {
  const subscribers = getSubscribers();
  const activeSubscribers = subscribers.filter(sub => sub.status === 'active');
  
  const sourceStats = activeSubscribers.reduce((acc, sub) => {
    acc[sub.source] = (acc[sub.source] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return {
    total: activeSubscribers.length,
    bySource: sourceStats,
    recent: activeSubscribers
      .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
      .slice(0, 10)
  };
};

export const exportSubscribers = (): string => {
  const subscribers = getSubscribers().filter(sub => sub.status === 'active');
  const csvHeader = 'Email,Source,Date Subscribed\n';
  const csvData = subscribers
    .map(sub => `${sub.email},${sub.source},${new Date(sub.timestamp).toLocaleDateString()}`)
    .join('\n');
  
  return csvHeader + csvData;
};

// Email Templates
export const createWeeklyNewsletterTemplate = (items: Item[]) => {
  const currentDate = new Date().toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Weekly Vintage Finds - Spice Interior Design</title>
    <style>
        body {
            font-family: 'Georgia', serif;
            line-height: 1.6;
            color: #2C2C2C;
            background-color: #FAFAFA;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: white;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        .header {
            background-color: #2C2C2C;
            color: white;
            padding: 30px;
            text-align: center;
        }
        .logo {
            font-size: 28px;
            font-weight: bold;
            letter-spacing: 2px;
            margin-bottom: 10px;
        }
        .tagline {
            font-size: 14px;
            color: #D4A574;
            text-transform: uppercase;
            letter-spacing: 1px;
        }
        .content {
            padding: 30px;
        }
        .intro {
            font-size: 16px;
            margin-bottom: 30px;
            line-height: 1.7;
        }
        .item {
            border-bottom: 1px solid #eee;
            padding: 20px 0;
            display: flex;
            align-items: center;
        }
        .item:last-child {
            border-bottom: none;
        }
        .item-image {
            width: 120px;
            height: 120px;
            object-fit: cover;
            margin-right: 20px;
            border-radius: 4px;
        }
        .item-details h3 {
            margin: 0 0 8px 0;
            color: #2C2C2C;
            font-size: 18px;
        }
        .item-details p {
            margin: 5px 0;
            color: #666;
            font-size: 14px;
        }
        .price {
            font-weight: bold;
            color: #D4A574;
            font-size: 16px;
        }
        .cta {
            background-color: #D4A574;
            color: white;
            padding: 12px 24px;
            text-decoration: none;
            border-radius: 4px;
            display: inline-block;
            margin-top: 10px;
            font-size: 14px;
            text-transform: uppercase;
            letter-spacing: 1px;
        }
        .footer {
            background-color: #f8f8f8;
            padding: 30px;
            text-align: center;
            color: #666;
            font-size: 12px;
        }
        .social-links {
            margin: 20px 0;
        }
        .social-links a {
            color: #D4A574;
            text-decoration: none;
            margin: 0 10px;
        }
        @media (max-width: 600px) {
            .item {
                flex-direction: column;
                text-align: center;
            }
            .item-image {
                margin-right: 0;
                margin-bottom: 15px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="logo">SPICE</div>
            <div class="tagline">Interior Design Studio</div>
        </div>
        
        <div class="content">
            <h1 style="color: #2C2C2C; margin-bottom: 10px;">Weekly Vintage Finds</h1>
            <p style="color: #D4A574; margin-bottom: 30px; font-style: italic;">${currentDate}</p>
            
            <div class="intro">
                <p>Hello vintage furniture enthusiast!</p>
                <p>This week we've curated an exceptional selection of unique pieces from talented sellers across Western Europe. Each item has been handpicked for its distinctive character, quality craftsmanship, and potential to transform your living space.</p>
            </div>
            
            <h2 style="color: #2C2C2C; border-bottom: 2px solid #D4A574; padding-bottom: 10px;">This Week's Featured Finds</h2>
            
            ${items.map(item => `
            <div class="item">
                <img src="${item.images[0]}" alt="${item.name}" class="item-image" />
                <div class="item-details">
                    <h3>${item.name}</h3>
                    <p>${item.description || 'A beautiful vintage piece with exceptional character and craftsmanship.'}</p>
                    <p><strong>Period:</strong> ${item.period || 'Mid-20th Century'}</p>
                    <p><strong>Origin:</strong> ${item.origin || 'Western Europe'}</p>
                    <div class="price">${item.price}</div>
                    <a href="https://your-website.com/shop/item/${item.id}" class="cta">View Details</a>
                </div>
            </div>
            `).join('')}
            
            <div style="background-color: #f8f8f8; padding: 20px; margin: 30px 0; text-align: center; border-radius: 8px;">
                <h3 style="color: #2C2C2C; margin-bottom: 15px;">Interested in any of these pieces?</h3>
                <p style="margin-bottom: 20px;">Contact us via WhatsApp for immediate assistance or to schedule a viewing.</p>
                <a href="https://wa.me/31626268470" class="cta">Message us on WhatsApp</a>
            </div>
            
            <p style="color: #666; font-style: italic; text-align: center; margin-top: 30px;">
                "Every piece tells a story. Let us help you find the perfect chapter for your home."
            </p>
        </div>
        
        <div class="footer">
            <div class="social-links">
                <a href="https://www.instagram.com/spice_interior/">Instagram</a> |
                <a href="https://www.tiktok.com/@spice_interiors">TikTok</a> |
                <a href="mailto:info@spice-interiors.com">Email</a> |
                <a href="https://your-website.com">Website</a>
            </div>
            <p>Spice Interior Design Studio<br>
            Amsterdam, Netherlands<br>
            +31 626268470</p>
            
            <p style="margin-top: 20px;">
                <a href="#" style="color: #666;">Unsubscribe</a> | 
                <a href="#" style="color: #666;">Update Preferences</a>
            </p>
        </div>
    </div>
</body>
</html>
  `;
};

interface DevNewsletterWindow extends Window {
  newsletterStats?: typeof getSubscriberStats;
  exportSubscribers?: typeof exportSubscribers;
}

// Console helper to view subscriber stats (for development)
if (typeof window !== 'undefined') {
  const devWindow = window as unknown as DevNewsletterWindow;
  devWindow.newsletterStats = getSubscriberStats;
  devWindow.exportSubscribers = exportSubscribers;
}

