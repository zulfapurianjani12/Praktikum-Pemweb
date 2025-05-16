from abc import ABC, abstractmethod

# Abstract class sebagai dasar semua item perpustakaan
class LibraryItem(ABC):
    def __init__(self, item_id, title):
        self._item_id = item_id    # Encapsulation (private attribute)
        self._title = title        # Encapsulation (private attribute)

    @abstractmethod
    def display_info(self):
        # Method abstrak, wajib diimplementasikan oleh subclass
        pass

    # Property untuk akses title (contoh penggunaan property decorator)
    @property
    def title(self):
        # Getter untuk atribut title
        return self._title

    def get_id(self):
        # Getter untuk atribut item_id
        return self._item_id


# Subclass Book, turunan dari LibraryItem
class Book(LibraryItem):
    def __init__(self, item_id, title, author):
        super().__init__(item_id, title)  # Memanggil konstruktor parent
        self.__author = author            # Private attribute

    def display_info(self):
        # Implementasi method abstrak (polymorphism)
        print("-" * 40)
        print("📘 Buku")
        print(f"🆔 ID       : {self._item_id}")
        print(f"📖 Judul    : {self._title}")
        print(f"✍️  Penulis  : {self.__author}")
        print("-" * 40)


# Subclass Magazine, turunan dari LibraryItem
class Magazine(LibraryItem):
    def __init__(self, item_id, title, issue):
        super().__init__(item_id, title)  # Memanggil constructor parent
        self.__issue = issue              # Encapsulation

    def display_info(self):
        # Implementasi method abstrak (polymorphism)
        print("-" * 40)
        print("📰 Majalah")
        print(f"🆔 ID       : {self._item_id}")
        print(f"📖 Judul    : {self._title}")
        print(f"📅 Edisi     : {self.__issue}")
        print("-" * 40)


# Class utama untuk manajemen koleksi perpustakaan
class Library:
    def __init__(self):
        self.__items = []  # Private list untuk menyimpan semua item

    def add_item(self, item):
        # Menambahkan item baru ke daftar
        self.__items.append(item)
        print(f"\n✅ Item '{item.title}' berhasil ditambahkan!\n")

    def display_all_items(self):
        # Menampilkan semua item yang tersedia
        if not self.__items:
            print("⚠️  Belum ada item di perpustakaan.\n")
            return
        print("\n📚 Daftar Seluruh Item di Perpustakaan:\n")
        for item in self.__items:
            item.display_info()  # Polymorphism: setiap item punya cara tampil sendiri

    def search_item(self, keyword):
        # Mencari item berdasarkan judul atau ID
        print(f"\n🔍 Mencari item dengan keyword: '{keyword}'\n")
        found = False
        for item in self.__items:
            if keyword.lower() in item.title.lower() or keyword == str(item.get_id()):
                item.display_info()
                found = True
        if not found:
            print("❌ Item tidak ditemukan.\n")


# Program utama sebagai antarmuka pengguna
def main():
    library = Library()  # Membuat instance perpustakaan

    while True:
        print("\n=================================")
        print("MANAJEMEN PERPUSTAKAAN SEDERHANA")
        print("=================================")
        print("\n===== MENU PERPUSTAKAAN =====")
        print("1. Tambah Buku")
        print("2. Tambah Majalah")
        print("3. Tampilkan Semua Item")
        print("4. Cari Item")
        print("5. Keluar")

        pilihan = input("Pilih menu (1-5): ")

        if pilihan == "1":
            # Input data buku dan tambah ke perpustakaan
            item_id = input("Masukkan ID Buku     : ")
            title = input("Masukkan Judul Buku  : ")
            author = input("Masukkan Nama Penulis: ")
            book = Book(item_id, title, author)
            library.add_item(book)

        elif pilihan == "2":
            # Input data majalah dan tambah ke perpustakaan
            item_id = input("Masukkan ID Majalah  : ")
            title = input("Masukkan Judul Majalah: ")
            issue = input("Masukkan Edisi        : ")
            magazine = Magazine(item_id, title, issue)
            library.add_item(magazine)

        elif pilihan == "3":
            # Tampilkan semua item
            library.display_all_items()

        elif pilihan == "4":
            # Cari item berdasarkan keyword
            keyword = input("Masukkan Judul atau ID yang dicari: ")
            library.search_item(keyword)

        elif pilihan == "5":
            # Keluar dari program
            print("👋 Terima kasih telah menggunakan sistem perpustakaan!")
            break

        else:
            # Validasi input menu
            print("❌ Pilihan tidak valid. Silakan pilih angka 1-5.")


# Menjalankan program utama jika file dijalankan langsung
if __name__ == "__main__":
    main()