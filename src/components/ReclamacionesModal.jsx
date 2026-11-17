import React, { useState } from 'react';
import { X, BookOpen, Send, CheckCircle } from 'lucide-react';
import { translations } from '../data/translations';

export default function ReclamacionesModal({ lang = 'es', isOpen, onClose }) {
  const t = translations[lang]?.reclamaciones || translations.es.reclamaciones;
  const [submitted, setSubmitted] = useState(false);
  const [claimCode, setClaimCode] = useState('');
  const [formData, setFormData] = useState({
    nombre: '',
    dni: '',
    email: '',
    telefono: '',
    direccion: '',
    tipo: 'Reclamo',
    detalle: '',
    pedido: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    const newCode = `REC-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    setClaimCode(newCode);

    const whatsappNumber = '51910958898';
    const message = encodeURIComponent(
      `${t.title} (${newCode}) - Condori Expedition Transport\n\n` +
      `${t.nameLabel.replace(' *', '')}: ${formData.nombre}\n` +
      `${t.idLabel.replace(' *', '')}: ${formData.dni}\n` +
      `${t.emailLabel.replace(' *', '')}: ${formData.email}\n` +
      `${t.phoneLabel.replace(' *', '')}: ${formData.telefono}\n` +
      `${t.typeLabel.replace(' *', '')}: ${formData.tipo}\n\n` +
      `${t.detailLabel.replace(' *', '')}:\n${formData.detalle}\n\n` +
      `${t.requestLabel.replace(' *', '')}:\n${formData.pedido}`
    );

    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content reclamaciones-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label={t.btnClose}><X size={24} /></button>

        <div className="reclamaciones-header">
          <BookOpen size={28} />
          <div>
            <h2>{t.title}</h2>
            <p>CONDORI EXPEDITION TRANSPORT • Grupo Condori RYD SAC • RUC 20616421744</p>
          </div>
        </div>

        {submitted ? (
          <div className="reclamaciones-success">
            <CheckCircle size={48} color="#10b981" />
            <h3>{t.successTitle}</h3>
            <p>{t.successCodeText} <strong>{claimCode}</strong>.</p>
            <p>{t.successLegalText}</p>
            <button className="btn-primary" onClick={onClose}>{t.btnClose}</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="reclamaciones-form">
            <p className="rec-info-text">{t.infoText}</p>

            <div className="form-row-2">
              <div className="form-group">
                <label>{t.nameLabel}</label>
                <input type="text" required value={formData.nombre} onChange={e => setFormData({...formData, nombre: e.target.value})} placeholder={t.namePlaceholder} />
              </div>
              <div className="form-group">
                <label>{t.idLabel}</label>
                <input type="text" required value={formData.dni} onChange={e => setFormData({...formData, dni: e.target.value})} placeholder={t.idPlaceholder} />
              </div>
            </div>

            <div className="form-row-2">
              <div className="form-group">
                <label>{t.emailLabel}</label>
                <input type="email" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} placeholder={t.emailPlaceholder} />
              </div>
              <div className="form-group">
                <label>{t.phoneLabel}</label>
                <input type="tel" required value={formData.telefono} onChange={e => setFormData({...formData, telefono: e.target.value})} placeholder={t.phonePlaceholder} />
              </div>
            </div>

            <div className="form-group">
              <label>{t.typeLabel}</label>
              <select value={formData.tipo} onChange={e => setFormData({...formData, tipo: e.target.value})}>
                <option value="Reclamo">{t.typeReclamo}</option>
                <option value="Queja">{t.typeQueja}</option>
              </select>
            </div>

            <div className="form-group">
              <label>{t.detailLabel}</label>
              <textarea rows="3" required value={formData.detalle} onChange={e => setFormData({...formData, detalle: e.target.value})} placeholder={t.detailPlaceholder}></textarea>
            </div>

            <div className="form-group">
              <label>{t.requestLabel}</label>
              <textarea rows="2" required value={formData.pedido} onChange={e => setFormData({...formData, pedido: e.target.value})} placeholder={t.requestPlaceholder}></textarea>
            </div>

            <div className="modal-footer">
              <button type="button" className="btn-secondary" onClick={onClose}>{t.btnCancel}</button>
              <button type="submit" className="btn-primary"><Send size={16} /> {t.btnSubmit}</button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
