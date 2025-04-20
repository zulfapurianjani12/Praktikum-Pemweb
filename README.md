# 📚 Deskripsi Aplikasi Manajemen Novel Zulfa - React

Aplikasi ini merupakan aplikasi manajemen daftar buku novel sederhana yang dibuat menggunakan React. Pengguna dapat menambahkan, mengedit, menghapus, mencari, dan memfilter buku berdasarkan status seperti "Milik", "Sedang Dibaca", dan "Ingin Dibeli". Aplikasi juga menyimpan data secara lokal di browser menggunakan localStorage. Selain itu, aplikasi juga memiliki multiple halaman yaitu ada halaman Home dan Statistik.

#  🚀 Instalasi & Menjalankan Aplikasi

1- Buat folder dengan instalisasi node.js lalu buat di CMD dengan "npx create-react-app book-manager"
2- Lalu buat "CD book-manager"
3- Buat "code ."
4- Setelah buat codenya jalankan pada terminal dengan klik "npm start"
5- Buka http://localhost:3000 untuk melihat aplikasi berjalan
6- Aplikasi bisa menambahkan buku dengan mengisi bagian judul buku, penulis, pilih status dan klik tambah buku
7- Setelah buku ditambahkan aplikasi bisa memfilter status dan bisa melakukan pencarian dengan klik cai buku
8- Jika ingin mengedit atau menghapus buku yang telah ditambahkan, bisa klik tombol edit dan hapus
9- Klik menu halaman statistik jika ingin melihat jumlah statistik buku dan klik home jika ingin kembali

# 🗄️ Deskripsi Fitur Utama

1- Tambah/Edit/Hapus Buku
a. Form input judul, penulis, dan status.
b. Bisa mengedit buku yang sudah ada.
c. Bisa menghapus buku dari daftar.

2- Pencarian dan Filter
a. Cari buku berdasarkan judul.
b. Filter berdasarkan status: Milik, Sedang Dibaca, Ingin Dibeli.

3- Statistik Buku
a. Menampilkan total buku.
b. Jumlah berdasarkan status.

4- Penyimpanan Lokal
a- Data buku disimpan di localStorage, jadi tetap tersedia meskipun browser ditutup.

#  ⚙️ Fitur & Konsep React yang Digunakan

1- React Components
a. Aplikasi dibangun dengan struktur komponen modular:
b. BookForm: input data buku
c. BookList: menampilkan daftar buku
d. BookFilter: filter status buku
e. BookSearch: pencarian buku
f. StatsPage: ringkasan statistik

2- Context API
a. Menggunakan React Context di BookContext.js agar data buku bisa diakses dari seluruh komponen tanpa prop-drilling.

3- Routing
a. Menggunakan react-router-dom untuk navigasi antara halaman Home dan Statistik.

4- React Hooks
a. useState untuk manajemen state lokal.
b. useEffect untuk efek samping seperti menyimpan ke localStorage.
c. useContext untuk akses data global.
d. useMemo di useBookStats agar efisien menghitung data.

5- Custom Hooks
a. useBookStats: menghitung statistik jumlah buku berdasarkan status.
b. useLocalStorage: menyimpan dan mengambil data dari localStorage dengan mudah.

# 📸 Tampilan Antarmuka

1- Halaman Home
Menampilkan form, daftar buku, filter, dan pencarian.
<img src="./screenshots/HomePage.png">

2- Halaman Statistik
Menampilkan ringkasan jumlah buku.
<img src="./screenshots/Statpage.png">

# 🚫 Testing

Menggunakan @testing-library/react untuk menguji komponen seperti form, list, filter, dan context.
