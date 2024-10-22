// Model Nilai
class Nilai {
    constructor(nilai) {
        this.nilai = nilai;
    }

    hitungRataRata() {
        if (!Array.isArray(this.nilai) || this.nilai.length === 0) {
            throw new Error("Data nilai tidak valid atau kosong.");
        }
        const total = this.nilai.reduce((acc, curr) => acc + curr, 0);
        return total / this.nilai.length;
    }
}

// View Nilai
class NilaiView {
    render(rataRata) {
        return `Rata-rata nilai: ${rataRata};`
    }

    renderError(error) {
        return `Error: ${error};`
    }
}

// Controller Nilai
class NilaiController {
    constructor(Model, View) {
        this.Model = Model;
        this.View = View;
    }

    tampilkanRataRata(nilai) {
        try {
            const modelNilai = new this.Model(nilai);
            const rataRata = modelNilai.hitungRataRata();
            console.log(new this.View().render(rataRata)); // Buat instance view baru
        } catch (error) {
            console.log(new this.View().renderError(error.message)); // Buat instance view baru
        }
    }
}

// Fungsi Pembagian
function bagi(a, b) {
    try {
        if (b === 0) {
            throw new Error("Pembagian dengan nol tidak diperbolehkan.");
        }
        return a / b;
    } catch (error) {
        console.error("Terjadi error:", error.message);
    } finally {
        console.log("Operasi pembagian selesai.");
    }
}

// Inisialisasi dan Penggunaan
const nilaiController = new NilaiController(Nilai, NilaiView);

// Contoh Penggunaan tampilkanRataRata
nilaiController.tampilkanRataRata([75, 87, 76, 89, 100]); // Output: Rata-rata nilai: 85,4
nilaiController.tampilkanRataRata([]);            // Output: Error: Data nilai tidak valid atau kosong.

// Contoh Penggunaan Fungsi bagi
console.log(bagi(10, 2)); // Output: 10 dibagi 2 hasilnya adalah 5
console.log(bagi(10, 0)); // Output: Terjadi error: Pembagian dengan nol tidak diperbolehkan.
// Operasi pembagian selesai
