# Program Pengelolaan Data Nilai Mahasiswa

# List berisi data mahasiswa
mahasiswa = [
    {"nama": "Kayla", "nim": "122140009", "nilai_uts": 75, "nilai_uas": 85, "nilai_tugas": 80},
    {"nama": "Yohanna", "nim": "122140010", "nilai_uts": 65, "nilai_uas": 70, "nilai_tugas": 75},
    {"nama": "Nasya", "nim": "122140016", "nilai_uts": 55, "nilai_uas": 60, "nilai_tugas": 58},
    {"nama": "Zulfa", "nim": "122140023", "nilai_uts": 80, "nilai_uas": 90, "nilai_tugas": 85},
    {"nama": "Rifnita", "nim": "122140031", "nilai_uts": 45, "nilai_uas": 50, "nilai_tugas": 48}
]

# Hitung nilai akhir dan tentukan grade
for mhs in mahasiswa:
    nilai_akhir = (0.3 * mhs["nilai_uts"]) + (0.4 * mhs["nilai_uas"]) + (0.3 * mhs["nilai_tugas"])
    mhs["nilai_akhir"] = nilai_akhir

    # Menentukan grade
    if nilai_akhir >= 80:
        mhs["grade"] = "A"
    elif 70 <= nilai_akhir < 80:
        mhs["grade"] = "B"
    elif 60 <= nilai_akhir < 70:
        mhs["grade"] = "C"
    elif 50 <= nilai_akhir < 60:
        mhs["grade"] = "D"
    else:
        mhs["grade"] = "E"

# Tampilkan data dalam format tabel
print("="*80)
print(f"{'Nama':<10} {'NIM':<10} {'UTS':<5} {'UAS':<5} {'Tugas':<7} {'Akhir':<7} {'Grade':<5}")
print("="*80)

for mhs in mahasiswa:
    print(f"{mhs['nama']:<10} {mhs['nim']:<10} {mhs['nilai_uts']:<5} {mhs['nilai_uas']:<5} {mhs['nilai_tugas']:<7} {mhs['nilai_akhir']:<7.2f} {mhs['grade']:<5}")

print("="*80)

# Cari mahasiswa dengan nilai tertinggi dan terendah
nilai_akhir_list = [mhs["nilai_akhir"] for mhs in mahasiswa]
maks = max(nilai_akhir_list)
mins = min(nilai_akhir_list)

# Tampilkan mahasiswa nilai tertinggi
print("\nMahasiswa dengan Nilai Tertinggi:")
for mhs in mahasiswa:
    if mhs["nilai_akhir"] == maks:
        print(f"{mhs['nama']} ({mhs['nim']}) Dengan Nilai Akhir: {mhs['nilai_akhir']:.2f}")

# Tampilkan mahasiswa nilai terendah
print("\nMahasiswa dengan Nilai Terendah:")
for mhs in mahasiswa:
    if mhs["nilai_akhir"] == mins:
        print(f"{mhs['nama']} ({mhs['nim']}) Dengan Nilai Akhir: {mhs['nilai_akhir']:.2f}")
