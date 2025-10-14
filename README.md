# SET UP PERTAMA 🚀

## Install Yang Di Perlukan 
**Masih bisah Nambah Lagi Nih**
```bash
  npm install tailwindcss @tailwindcss/vite
  npm install react-routes-dom
```
sorry kalok ada typo 

## Structre Folder 
**Aku masih belajar ya ini pakek atomic design cuman aku buat agak lebih singkat cuman 3 layer aja di componentnya**
```bash 
  src/
├── assets/              # Gambar, ikon, font
│   └── logo.svg
│
├── components/          # Komponen UI
│   ├── elements/        # Elemen kecil (gabungan atom & molecule)
│   │   ├── Button/
│   │   │   └── Button.tsx
│   │   └── InputField/
│   │       └── InputField.tsx
│   │
│   ├── organisms/       # Komponen kompleks
│   │   └── Navbar/
│   │       └── Navbar.tsx
│   │
│   └── pages/           # Halaman aplikasi
│       ├── HomePage/
│       │   └── HomePage.tsx
│       └── ProductPage/
│           └── ProductPage.tsx
│
├── lib/                 # Logic non-UI (fungsi, api, hooks)
│   ├── api/
│   │   ├── client.ts
│   │   └── productApi.ts
│   │
│   ├── hooks/
│   │   ├── useFetch.ts
│   │   └── useAuth.ts
│   │
│   └── utils/
│       ├── formatCurrency.ts
│       └── dateFormatter.ts
│
├── routes/              # Buat Routing setiap halaman, nah bisa juga nantik di setiap halaman dibuatkan routingnya sendiri 
│   └── AppRoutes.tsx
│
├── store/              # Buat nyimpen global state (aku masih belum ngerti)
│   ├── userStore.ts
│   └── productStore.ts
│
├── types/              # Buat naruh interface nantik tinggal panggil aja di components/pages
│   └── Product.ts
│
├── App.tsx     # Ini halaman yang akan akess router 
├── main.tsx    # Nah ini bapak kita yang make untuk jalanin\
└── index.css
```
mentornya masih gpt bang yak
https://chatgpt.com/c/68ee6bcb-1198-8321-9e06-11b1be10169f

## Masih bisa nambah bang yakk belum lese nih baru setup (Masih belajar)
