document.querySelectorAll('.btnDetail').forEach(item => {
    item.addEventListener('click', (e) => {
        let parent = e.target.parentNode.parentNode;

        let gambar = parent.querySelector('.card-img-top').scr;
        let harga = parent.querySelector('.harga').innerHTML;
        let judul = parent.querySelector('.card-text').innerHTML;
        let deskripsi = parent.querySelector('.deskripsi')? parent.querySelector('.deskripsi').innerHTML:'<i>tidak ada informasi yang tersedia<i>';
        

        let tombolModal = document.querySelector('.btnModal');
        tombolModal.click();

        document.querySelector('.modalTitle').innerHTML = judul;
        document.querySelector('.modalDeskripsi').innerHTML = deskripsi;
        document.querySelector('.modalHarga').innerHTML = harga;

        const nohp = '628980744222';
        let pesan = `https://api.whatsapp.com/send?phone=${nohp}&text=Halo, saya mau pesan produk ini: ${judul}`;

        document.querySelector('.btnBeli').href = pesan;
    })
})