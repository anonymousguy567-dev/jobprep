// এটি একটি বেসিক সার্ভিস ওয়ার্কার যা অ্যাপ ইন্সটল করার পারমিশন দেবে
self.addEventListener('install', (e) => {
  console.log('[Service Worker] Install');
});

self.addEventListener('fetch', (e) => {
  // আপাতত কোনো অফলাইন ক্যাশিং করছি না, শুধু ইন্সটল রিকোয়ারমেন্ট পূরণ করছি
});