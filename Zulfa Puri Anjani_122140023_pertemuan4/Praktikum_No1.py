# Program Penghitung BMI Sederhana

# Membuat variabel berat badan (kg) dan tinggi badan (cm)
berat = float(input("Masukkan berat badan (kg): "))
tinggi = float(input("Masukkan tinggi badan (cm): "))

# Konversi tinggi dari cm ke meter
tinggi = tinggi / 100

# Menghitung BMI
bmi = berat / (tinggi * tinggi)

# Menampilkan hasil BMI
print(f"\nBMI Anda adalah: {bmi:.2f}")

# Menentukan kategori BMI
if bmi < 18.5:
    print("Kategori: Berat badan kurang")
elif 18.5 <= bmi < 25:
    print("Kategori: Berat badan normal")
elif 25 <= bmi < 30:
    print("Kategori: Berat badan berlebih")
else:
    print("Kategori: Obesitas")
