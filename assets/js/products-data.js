// ============================================================
// FICHIER CENTRAL DES PRODUITS DIGITALPAY HT
// ============================================================

const productsData = [
  // ============================
  // GAMING
  // ============================
  
  // Free Fire
  { category: 'gaming', subcategory: 'freefire', type: 'diamants', id: 'ff_d_1', name: '110 + 10 diamants', price: 157 },
  { category: 'gaming', subcategory: 'freefire', type: 'diamants', id: 'ff_d_2', name: '310 + 31 diamants', price: 471 },
  { category: 'gaming', subcategory: 'freefire', type: 'diamants', id: 'ff_d_3', name: '520 + 52 diamants', price: 775 },
  { category: 'gaming', subcategory: 'freefire', type: 'diamants', id: 'ff_d_4', name: '1060 + 106 diamants', price: 1550 },
  { category: 'gaming', subcategory: 'freefire', type: 'diamants', id: 'ff_d_5', name: '2180 + 218 diamants', price: 3100 },
  { category: 'gaming', subcategory: 'freefire', type: 'diamants', id: 'ff_d_6', name: '5600 + 560 diamants', price: 7750 },
  { category: 'gaming', subcategory: 'freefire', type: 'pass', id: 'ff_p_1', name: 'Booyah Pass', price: 400 },
  { category: 'gaming', subcategory: 'freefire', type: 'pass', id: 'ff_p_2', name: 'Level Up Pass', price: 800 },
  { category: 'gaming', subcategory: 'freefire', type: 'abonnement', id: 'ff_a_1', name: 'Abonnement Semaine', price: 325 },
  { category: 'gaming', subcategory: 'freefire', type: 'abonnement', id: 'ff_a_2', name: 'Abonnement Mois', price: 1600 },
  
  // FC Mobile
  { category: 'gaming', subcategory: 'fcmobile', type: 'points', id: 'fcm_1', name: '40 Points FC', price: 95 },
  { category: 'gaming', subcategory: 'fcmobile', type: 'points', id: 'fcm_2', name: '100 Points FC', price: 210 },
  { category: 'gaming', subcategory: 'fcmobile', type: 'points', id: 'fcm_3', name: '500 + 20 bonus', price: 1085 },
  { category: 'gaming', subcategory: 'fcmobile', type: 'points', id: 'fcm_4', name: '1000 + 70 bonus', price: 2192 },
  { category: 'gaming', subcategory: 'fcmobile', type: 'points', id: 'fcm_5', name: '2000 + 200 bonus', price: 4250 },
  { category: 'gaming', subcategory: 'fcmobile', type: 'points', id: 'fcm_6', name: '5000 + 750 bonus', price: 20750 },
  { category: 'gaming', subcategory: 'fcmobile', type: 'points', id: 'fcm_7', name: '10000 + 2000 bonus', price: 10500 },
  
  // E-Football
  { category: 'gaming', subcategory: 'efootball', type: 'pieces', id: 'ef_1', name: '130 pièces', price: 220 },
  { category: 'gaming', subcategory: 'efootball', type: 'pieces', id: 'ef_2', name: '300 pièces', price: 550 },
  { category: 'gaming', subcategory: 'efootball', type: 'pieces', id: 'ef_3', name: '550 pièces', price: 885 },
  { category: 'gaming', subcategory: 'efootball', type: 'pieces', id: 'ef_4', name: '1040 pièces', price: 1625 },
  { category: 'gaming', subcategory: 'efootball', type: 'pieces', id: 'ef_5', name: '2130 pièces', price: 3140 },
  { category: 'gaming', subcategory: 'efootball', type: 'pieces', id: 'ef_6', name: '3250 pièces', price: 4675 },
  { category: 'gaming', subcategory: 'efootball', type: 'pieces', id: 'ef_7', name: '12800 pièces', price: 16230 },
  
  // PUBG Mobile
  { category: 'gaming', subcategory: 'pubg', type: 'uc', id: 'pubg_1', name: '60 UC', price: 180 },
  { category: 'gaming', subcategory: 'pubg', type: 'uc', id: 'pubg_2', name: '300+25 UC', price: 891 },
  { category: 'gaming', subcategory: 'pubg', type: 'uc', id: 'pubg_3', name: '600+60 UC', price: 1780 },
  { category: 'gaming', subcategory: 'pubg', type: 'uc', id: 'pubg_4', name: '1500+300 UC', price: 4130 },
  { category: 'gaming', subcategory: 'pubg', type: 'uc', id: 'pubg_5', name: '3000+850 UC', price: 8075 },
  
  // Blood Strike
  { category: 'gaming', subcategory: 'bloodstrike', type: 'gold', id: 'bs_1', name: '50+1 Gold', price: 80 },
  { category: 'gaming', subcategory: 'bloodstrike', type: 'gold', id: 'bs_2', name: '100+5 Gold', price: 157 },
  { category: 'gaming', subcategory: 'bloodstrike', type: 'gold', id: 'bs_3', name: '300+20 Gold', price: 471 },
  { category: 'gaming', subcategory: 'bloodstrike', type: 'gold', id: 'bs_4', name: '500+40 Gold', price: 785 },
  { category: 'gaming', subcategory: 'bloodstrike', type: 'gold', id: 'bs_5', name: '1000+100 Gold', price: 1571 },
  { category: 'gaming', subcategory: 'bloodstrike', type: 'gold', id: 'bs_6', name: '5000+800 Gold', price: 9100 },
  { category: 'gaming', subcategory: 'bloodstrike', type: 'pass', id: 'bs_p_1', name: 'Strike Pass Elite', price: 640 },
  { category: 'gaming', subcategory: 'bloodstrike', type: 'pass', id: 'bs_p_2', name: 'Strike Pass Premium', price: 1485 },
  { category: 'gaming', subcategory: 'bloodstrike', type: 'pass', id: 'bs_p_3', name: 'Level Up Pass', price: 330 },
  
  // Roblox
  { category: 'gaming', subcategory: 'roblox', type: 'robux', id: 'rbx_1', name: '500 Robux', price: 750 },
  { category: 'gaming', subcategory: 'roblox', type: 'robux', id: 'rbx_2', name: '1000 Robux', price: 1460 },
  { category: 'gaming', subcategory: 'roblox', type: 'robux', id: 'rbx_3', name: '2000 Robux', price: 2950 },
  { category: 'gaming', subcategory: 'roblox', type: 'robux', id: 'rbx_4', name: '5250 Robux', price: 7350 },
  { category: 'gaming', subcategory: 'roblox', type: 'robux', id: 'rbx_5', name: '11000 Robux', price: 14661 },
  { category: 'gaming', subcategory: 'roblox', type: 'robux', id: 'rbx_6', name: '24000 Robux', price: 29575 },
  
  // DLS
  { category: 'gaming', subcategory: 'dls', type: 'coins', id: 'dls_c_1', name: '900 Coins', price: 400 },
  { category: 'gaming', subcategory: 'dls', type: 'coins', id: 'dls_c_2', name: '1950 Coins', price: 825 },
  { category: 'gaming', subcategory: 'dls', type: 'coins', id: 'dls_c_3', name: '3450 Coins', price: 1400 },
  { category: 'gaming', subcategory: 'dls', type: 'coins', id: 'dls_c_4', name: '6700 Coins', price: 2375 },
  { category: 'gaming', subcategory: 'dls', type: 'coins', id: 'dls_c_5', name: '14500 Coins', price: 4000 },
  { category: 'gaming', subcategory: 'dls', type: 'coins', id: 'dls_c_6', name: '40500 Coins', price: 9250 },
  { category: 'gaming', subcategory: 'dls', type: 'gems', id: 'dls_g_1', name: '90 Gems', price: 400 },
  { category: 'gaming', subcategory: 'dls', type: 'gems', id: 'dls_g_2', name: '400 Gems', price: 1600 },
  { category: 'gaming', subcategory: 'dls', type: 'gems', id: 'dls_g_3', name: '910 Gems', price: 3400 },
  { category: 'gaming', subcategory: 'dls', type: 'gems', id: 'dls_g_4', name: '2700 Gems', price: 8850 },
  { category: 'gaming', subcategory: 'dls', type: 'gems', id: 'dls_g_5', name: '6000 Gems', price: 20250 },
  { category: 'gaming', subcategory: 'dls', type: 'pass', id: 'dls_p_1', name: 'Season Pass', price: 810 },
  { category: 'gaming', subcategory: 'dls', type: 'pass', id: 'dls_p_2', name: 'Season Pass Premium', price: 2025 },
  
  // Minecraft
  { category: 'gaming', subcategory: 'minecraft', type: 'minecoins', id: 'mc_1', name: '320 Minecoins', price: 316 },
  { category: 'gaming', subcategory: 'minecraft', type: 'minecoins', id: 'mc_2', name: '1080 Minecoins', price: 930 },
  { category: 'gaming', subcategory: 'minecraft', type: 'minecoins', id: 'mc_3', name: '1840 Minecoins', price: 1550 },
  { category: 'gaming', subcategory: 'minecraft', type: 'minecoins', id: 'mc_4', name: '3800 Minecoins', price: 3100 },
  { category: 'gaming', subcategory: 'minecraft', type: 'minecoins', id: 'mc_5', name: '9600 Minecoins', price: 7700 },
  
  // Flex City
  { category: 'gaming', subcategory: 'flexcity', type: 'diamants', id: 'fc_d_1', name: '100 Diamants', price: 215 },
  { category: 'gaming', subcategory: 'flexcity', type: 'diamants', id: 'fc_d_2', name: '310 Diamants', price: 628 },
  { category: 'gaming', subcategory: 'flexcity', type: 'diamants', id: 'fc_d_3', name: '520 Diamants', price: 1100 },
  { category: 'gaming', subcategory: 'flexcity', type: 'diamants', id: 'fc_d_4', name: '1060 Diamants', price: 2150 },
  { category: 'gaming', subcategory: 'flexcity', type: 'diamants', id: 'fc_d_5', name: '4320 Diamants', price: 4500 },
  { category: 'gaming', subcategory: 'flexcity', type: 'diamants', id: 'fc_d_6', name: '11200 Diamants', price: 10800 },
  { category: 'gaming', subcategory: 'flexcity', type: 'gold', id: 'fc_g_1', name: '500 Gold', price: 195 },
  { category: 'gaming', subcategory: 'flexcity', type: 'gold', id: 'fc_g_2', name: '2100 Gold', price: 628 },
  { category: 'gaming', subcategory: 'flexcity', type: 'gold', id: 'fc_g_3', name: '6250 Gold', price: 1800 },
  { category: 'gaming', subcategory: 'flexcity', type: 'gold', id: 'fc_g_4', name: '17000 Gold', price: 4750 },
  { category: 'gaming', subcategory: 'flexcity', type: 'gold', id: 'fc_g_5', name: '40000 Gold', price: 10000 },
  { category: 'gaming', subcategory: 'flexcity', type: 'gold', id: 'fc_g_6', name: '77500 Gold', price: 18000 },
  
  
  // ============================
  // STREAMING
  // ============================
  { category: 'streaming', subcategory: 'netflix', type: 'mois', id: 'netflix_1', name: 'Netflix - 1 mois', price: 400 },
  { category: 'streaming', subcategory: 'netflix', type: 'mois', id: 'netflix_2', name: 'Netflix - 2 mois', price: 850 },
  { category: 'streaming', subcategory: 'netflix', type: 'mois', id: 'netflix_3', name: 'Netflix - 3 mois', price: 1300 },
  
  { category: 'streaming', subcategory: 'disneyplus', type: 'mois', id: 'disney_1', name: 'Disney+ - 1 mois', price: 625 },
  { category: 'streaming', subcategory: 'disneyplus', type: 'mois', id: 'disney_2', name: 'Disney+ - 2 mois', price: 1200 },
  { category: 'streaming', subcategory: 'disneyplus', type: 'mois', id: 'disney_3', name: 'Disney+ - 3 mois', price: 1800 },
  
  { category: 'streaming', subcategory: 'primevideo', type: 'mois', id: 'prime_1', name: 'Prime Video - 1 mois', price: 425 },
  { category: 'streaming', subcategory: 'primevideo', type: 'mois', id: 'prime_2', name: 'Prime Video - 2 mois', price: 825 },
  { category: 'streaming', subcategory: 'primevideo', type: 'mois', id: 'prime_3', name: 'Prime Video - 3 mois', price: 1240 },
  
  { category: 'streaming', subcategory: 'crunchyroll', type: 'mois', id: 'crunchy_1', name: 'Crunchyroll - 1 mois', price: 425 },
  { category: 'streaming', subcategory: 'crunchyroll', type: 'mois', id: 'crunchy_2', name: 'Crunchyroll - 2 mois', price: 850 },
  { category: 'streaming', subcategory: 'crunchyroll', type: 'mois', id: 'crunchy_3', name: 'Crunchyroll - 3 mois', price: 1325 },
  
  
  // ============================
  // SERVICES DIGITAUX
  // ============================
  { category: 'services_digitaux', subcategory: 'wise', type: 'recharge', id: 'wise_1', name: 'Wise - Recharge 5 - 5000 $', price: 0 }, // prix variable selon montant
  { category: 'services_digitaux', subcategory: 'meru', type: 'recharge', id: 'meru_1', name: 'MERU - Recharge 5 - 5000 $', price: 0 },
  { category: 'services_digitaux', subcategory: 'paypal', type: 'recharge', id: 'paypal_1', name: 'PayPal - Recharge 5 - 5000 $', price: 0 },
  { category: 'services_digitaux', subcategory: 'usdt', type: 'recharge', id: 'usdt_1', name: 'USDT - Recharge 5 - 5000 $', price: 0 },
  { category: 'services_digitaux', subcategory: 'telegram', type: 'premium', id: 'tg_1', name: 'Telegram Premium - 1 mois', price: 1160 },
  { category: 'services_digitaux', subcategory: 'telegram', type: 'premium', id: 'tg_2', name: 'Telegram Premium - 1 an', price: 8600 },
  { category: 'services_digitaux', subcategory: 'tiktok', type: 'coins', id: 'tt_1', name: 'TikTok - Packs variables', price: 0 },
  
  
  // ============================
  // GIFT CARDS
  // ============================
  { category: 'gift_cards', subcategory: 'playstation', type: 'voucher', id: 'ps_1', name: 'PlayStation - 10 $', price: 1500 },
  { category: 'gift_cards', subcategory: 'playstation', type: 'voucher', id: 'ps_2', name: 'PlayStation - 25 $', price: 3750 },
  { category: 'gift_cards', subcategory: 'playstation', type: 'voucher', id: 'ps_3', name: 'PlayStation - 50 $', price: 7500 },
  { category: 'gift_cards', subcategory: 'playstation', type: 'voucher', id: 'ps_4', name: 'PlayStation - 100 $', price: 15000 },
  
  { category: 'gift_cards', subcategory: 'netflix_gc', type: 'voucher', id: 'nflx_gc_1', name: 'Netflix Gift Card - 10 $', price: 1500 },
  { category: 'gift_cards', subcategory: 'netflix_gc', type: 'voucher', id: 'nflx_gc_2', name: 'Netflix Gift Card - 25 $', price: 3750 },
  { category: 'gift_cards', subcategory: 'netflix_gc', type: 'voucher', id: 'nflx_gc_3', name: 'Netflix Gift Card - 50 $', price: 7500 },
  
  { category: 'gift_cards', subcategory: 'apple', type: 'voucher', id: 'apple_gc_1', name: 'Apple Gift Card - 10 $', price: 1500 },
  { category: 'gift_cards', subcategory: 'apple', type: 'voucher', id: 'apple_gc_2', name: 'Apple Gift Card - 25 $', price: 3750 },
  { category: 'gift_cards', subcategory: 'apple', type: 'voucher', id: 'apple_gc_3', name: 'Apple Gift Card - 50 $', price: 7500 },
  { category: 'gift_cards', subcategory: 'apple', type: 'voucher', id: 'apple_gc_4', name: 'Apple Gift Card - 100 $', price: 15000 },
  
  { category: 'gift_cards', subcategory: 'googleplay', type: 'voucher', id: 'gp_gc_1', name: 'Google Play Card - 10 $', price: 1500 },
  { category: 'gift_cards', subcategory: 'googleplay', type: 'voucher', id: 'gp_gc_2', name: 'Google Play Card - 25 $', price: 3750 },
  { category: 'gift_cards', subcategory: 'googleplay', type: 'voucher', id: 'gp_gc_3', name: 'Google Play Card - 50 $', price: 7500 }
];

// Export pour utilisation dans les pages HTML
if (typeof window !== 'undefined') {
  window.productsData = productsData;
}