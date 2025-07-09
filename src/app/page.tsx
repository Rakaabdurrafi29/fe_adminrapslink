import React from 'react';


export default function HomePage() {
  return (
    <div style={styles.container}>
      {/* Header Profil */}
      <div style={styles.profileHeader}>
        {}
        <img
          src="https://via.placeholder.com/150/d3d3d3/000000?text=Profile"
          alt=""
          style={styles.profileImage}
        />
        <h1 style={styles.name}>Rakha Abdurrafi</h1>
        <p style={styles.followText}>Halo Semua!</p>
      </div>

      {/* Daftar Tautan Media Sosial */}
      <a href="https://instagram.com/rakaabdurrafi" target="_blank" rel="noopener noreferrer" style={styles.linkItem}>
        <img src="/instagram_icon.png" alt="Instagram Icon" style={styles.icon} />
        <span>INSTAGRAM</span>
      </a>

      <a href="https://youtube.com/Rakhaabdurrafi" target="_blank" rel="noopener noreferrer" style={styles.linkItem}>
        <img src="/youtube_icon.png" alt="YouTube Icon" style={styles.icon} />
        <span>YOUTUBE</span>
      </a>

      <a href="https://facebook.com/rakaabdurrafi" target="_blank" rel="noopener noreferrer" style={styles.linkItem}>
        <img src="/facebook_icon.png" alt="Facebook Icon" style={styles.icon} />
        <span>FACEBOOK</span>
      </a>

      <a href="https://tiktok.com/@rakaabdurrafi" target="_blank" rel="noopener noreferrer" style={styles.linkItem}>
        <img src="/tiktok_icon.png" alt="TikTok Icon" style={styles.icon} />
        <span>TIKTOK</span>
      </a>

      <a href="https://wa.me/6281234567890?text=Halo,%20saya%20tertarik%20dengan%20Pricelist%20Sepaham%20Potret" target="_blank" rel="noopener noreferrer" style={styles.linkItem}>
        <img src="/whatsapp_icon.png" alt="WhatsApp Icon" style={styles.icon} />
        <span>NOMOR KONTAK</span>
      </a>

    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    minHeight: '100vh', 
    backgroundColor: '#f0f0f0',
    fontFamily: 'Arial, sans-serif',
  },
  profileHeader: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '30px',
    textAlign: 'center',
  },
  profileImage: {
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: '15px',
    border: '3px solid #ccc',
  },
  name: {
    fontSize: '24px',
    fontWeight: 'bold',
    margin: '0 0 8px 0', 
  },
  followText: {
    fontSize: '18px',
    color: '#555',
    margin: '0',
  },
  linkItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: '15px 20px',
    borderRadius: '10px',
    marginBottom: '12px',
    width: '90%',
    maxWidth: '400px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    textDecoration: 'none',
    color: '#333',
    transition: 'transform 0.2s ease-in-out',
  },
  linkItemHover: {
    transform: 'translateY(-2px)',
  },
  icon: {
    width: '32px',
    height: '32px',
    marginRight: '15px',
    objectFit: 'contain',
  },
  footer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '40px',
    fontSize: '14px',
    color: '#777',
  },
  smallIcon: {
    width: '18px',
    height: '18px',
    marginRight: '8px',
    objectFit: 'contain',
  },
};