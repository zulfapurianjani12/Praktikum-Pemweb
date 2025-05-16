# main.py

import math_operations
from math_operations import luas_lingkaran, keliling_lingkaran

print("="*50)
print("Perhitungan Geometri")
print("="*50)

# Persegi
sisi = 5
print(f"Luas Persegi dengan sisi {sisi:<2} cm            = {math_operations.luas_persegi(sisi):>5} cm²")
print(f"Keliling Persegi dengan sisi {sisi:<2} cm        = {math_operations.keliling_persegi(sisi):>5} cm")

# Persegi Panjang
panjang = 8
lebar = 4
print(f"Luas Persegi Panjang {panjang}x{lebar} cm               = {math_operations.luas_persegi_panjang(panjang, lebar):>5} cm²")
print(f"Keliling Persegi Panjang {panjang}x{lebar} cm           = {math_operations.keliling_persegi_panjang(panjang, lebar):>5} cm")

# Lingkaran
jari_jari = 7
print(f"Luas Lingkaran dengan jari-jari {jari_jari:<2} cm     = {luas_lingkaran(jari_jari):>7.2f} cm²")
print(f"Keliling Lingkaran dengan jari-jari {jari_jari:<2} cm = {keliling_lingkaran(jari_jari):>7.2f} cm")

print("\n" + "="*50)
print("Konversi Suhu")
print("="*50)

# Suhu
celsius = 25
print(f"{celsius:<3}°C ke Fahrenheit    = {math_operations.celsius_to_fahrenheit(celsius):>7.2f}°F")
print(f"{celsius:<3}°C ke Kelvin        = {math_operations.celsius_to_kelvin(celsius):>7.2f} K")