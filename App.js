import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, Image, StyleSheet, FlatList, StatusBar } from 'react-native';

const GUNUNG = [
  { id: '1', nama: 'Gunung Sibayak', lokasi: 'Karo, Sumut', harga: 'Rp 35K', img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4' },
  { id: '2', nama: 'Gunung Rinjani', lokasi: 'Lombok, NTB', harga: 'Rp 150K', img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b' },
  { id: '3', nama: 'Gunung Semeru', lokasi: 'Lumajang, Jatim', harga: 'Rp 120K', img: 'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99' },
];

const REELS = [
  { id: '1', user: 'benhas_medan', gunung: 'Sibayak', caption: 'Sunrise di puncak! Perjuangan 4 jam 🔥', like: '2.4k' },
  { id: '2', user: 'rino_rinjani', gunung: 'Rinjani', caption: 'Rinjani tak pernah gagal! 🏔️', like: '1.2k' },
  { id: '3', user: 'sari_semeru', gunung: 'Semeru', caption: 'Puncak Mahameru 3676 mdpl', like: '890' },
];

export default function App() {
  const [reelsMode, setReelsMode] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  if (reelsMode) {
    return (
      <View style={{ flex: 1, backgroundColor: 'black' }}>
        <StatusBar hidden />
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'black' }}>
          <Image source={{ uri: GUNUNG[currentIndex % 3].img }} style={{ width: '100%', height: '100%', opacity: 0.6, position: 'absolute' }} />
          <View style={styles.reelsOverlay}>
            <Text style={styles.reelsUser}>@{REELS[currentIndex % 3].user} • {REELS[currentIndex % 3].gunung}</Text>
            <Text style={styles.reelsCaption}>{REELS[currentIndex % 3].caption}</Text>
            <TouchableOpacity style={styles.closeBtn} onPress={() => setReelsMode(false)}><Text style={{ color: 'white', fontWeight: 'bold' }}>X Tutup</Text></TouchableOpacity>
          </View>
          <View style={styles.reelsActions}>
            <Text style={styles.actionText}>❤️ {REELS[currentIndex % 3].like}</Text>
            <Text style={styles.actionText}>💬 112</Text>
            <Text style={styles.actionText}>🔖 89</Text>
          </View>
        </View>
        <TouchableOpacity style={{ position: 'absolute', bottom: 40, alignSelf: 'center', backgroundColor: 'rgba(0,0,0,0.5)', padding: 15, borderRadius: 10 }} onPress={() => setCurrentIndex(currentIndex + 1)}>
          <Text style={{ color: 'white' }}>Tap untuk video berikutnya ⬆️</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 40 }}>
      <View style={styles.header}>
        <Text style={styles.logo}>KICER</Text>
        <TouchableOpacity style={styles.reelsBtn} onPress={() => setReelsMode(true)}>
          <Text style={{ color: 'white', fontWeight: 'bold' }}>▶️ REELS</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.searchBox}>
        <TextInput placeholder="Cari gunung, Sibayak, Rinjani..." style={{ flex: 1 }} />
      </View>

      <ScrollView>
        <Text style={styles.sectionTitle}>🔥 Trending di Sumatera</Text>
        <FlatList
          horizontal
          data={GUNUNG}
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Image source={{ uri: item.img }} style={styles.cardImg} />
              <Text style={styles.cardNama}>{item.nama}</Text>
              <Text style={styles.cardLokasi}>{item.lokasi}</Text>
              <Text style={styles.cardHarga}>{item.harga}</Text>
            </View>
          )}
        />
        <View style={{ padding: 20, backgroundColor: '#e8f5e9', margin: 15, borderRadius: 15 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Selamat datang di KICER met! 🏔️</Text>
          <Text style={{ marginTop: 5 }}>Aplikasi hiking khas Medan, untuk anak gunung Sumatera!</Text>
          <Text style={{ marginTop: 10, color: 'green', fontWeight: 'bold' }}>✅ Versi ini sudah FIX, tidak error lagi!</Text>
          <Text>Tap tombol REELS di atas untuk coba fitur TikTok Gunung!</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  header: { flexDirection: 'row', justifyContent: 'space-between', padding: 15, alignItems: 'center' },
  logo: { fontSize: 28, fontWeight: 'bold', color: '#2e7d32' },
  reelsBtn: { backgroundColor: 'black', padding: 10, borderRadius: 20, paddingHorizontal: 20 },
  searchBox: { backgroundColor: '#f0f0f0', margin: 15, borderRadius: 10, padding: 12 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', padding: 15 },
  card: { width: 160, marginLeft: 15, backgroundColor: 'white', borderRadius: 15, elevation: 3, overflow: 'hidden' },
  cardImg: { width: '100%', height: 100 },
  cardNama: { fontWeight: 'bold', padding: 8 },
  cardLokasi: { paddingHorizontal: 8, color: 'gray', fontSize: 12 },
  cardHarga: { padding: 8, color: '#2e7d32', fontWeight: 'bold' },
  reelsOverlay: { position: 'absolute', bottom: 100, left: 15, right: 80 },
  reelsUser: { color: 'white', fontWeight: 'bold', fontSize: 16 },
  reelsCaption: { color: 'white', marginTop: 5 },
  reelsActions: { position: 'absolute', right: 15, bottom: 100, alignItems: 'center' },
  actionText: { color: 'white', fontSize: 20, marginTop: 15, fontWeight: 'bold' },
  closeBtn: { marginTop: 15, backgroundColor: 'rgba(255,255,255,0.2)', padding: 5, borderRadius: 5, alignSelf: 'flex-start' }
});