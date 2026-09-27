import React, { useState } from 'react';
import { X, BookOpen, Send, CheckCircle } from 'lucide-react';

export default function ReclamacionesModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    dni: '',
    email: '',
    telefono: '',
    direccion: '',
    tipo: 'Reclamo', // Reclamo o Queja
    detalle: '',
    pedido: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappNumber = '51967040149';
    const message = encodeURIComponent(
      `Libro de Reclamaciones - Condori Expedition Transport\n\n` +
      `Nombre: ${formData.nombre}\n` +
      `DNI / CE / Pasaporte: ${formData.dni}\n` +
      `Correo: ${formData.email}\n` +
      `Teléfono: ${formData.telefono}\n` +
      `Tipo: ${formData.tipo}\n\n` +
      `Detalle:\n${formData.detalle}\n\n` +
      `Pedido del consumidor:\n${formData.pedido}`
    );

    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content reclamaciones-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}><X size={24} /></button>

        <div className="reclamaciones-header">
          <BookOpen size={28} />
          <div>
            <h2>Libro de Reclamaciones Virtual</h2>
            <p>CONDORI EXPEDITION TRANSPORT • RUC 20601234567</p>
          </div>
        </div>

        {submitted ? (
          <div className="reclamaciones-success">
            <CheckCircle size={48} color="#10b981" />
            <h3>Reclamo / Queja Registrado Correctamente</h3>
            <p>Su código de hoja de reclamación es: <strong>REC-2026-{Math.floor(1000 + Math.random() * 9000)}</strong>.</p>
            <p>Conforme a la Ley N° 29571 (Código de Protección y Defensa del Consumidor del Perú), responderemos a su solicitud dentro del plazo legal establecido a través de su correo electrónico.</p>
            <button className="btn-primary" onClick={onClose}>Cerrar</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="reclamaciones-form">
            <p className="rec-info-text">Conforme a lo establecido en el Código de Protección y Defensa del Consumidor esta institución cuenta con un Libro de Reclamaciones a su disposición.</p>

            <div className="form-row-2">
              <div className="form-group">
                <label>Nombre y Apellidos *</label>
                <input type="text" required value={formData.nombre} onChange={e => setFormData({...formData, nombre: e.target.value})} placeholder="Juan Pérez" />
              </div>
              <div className="form-group">
                <label>DNI / CE / Pasaporte *</label>
                <input type="text" required value={formData.dni} onChange={e => setFormData({...formData, dni: e.target.value})} placeholder="12345678" />
              </div>
            </div>

            <div className="form-row-2">
              <div className="form-group">
                <label>Correo Electrónico *</label>
                <input type="email" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} placeholder="correo@ejemplo.com" />
              </div>
              <div className="form-group">
                <label>Teléfono de Contacto *</label>
                <input type="tel" required value={formData.telefono} onChange={e => setFormData({...formData, telefono: e.target.value})} placeholder="+51 987 654 321" />
              </div>
            </div>

            <div className="form-group">
              <label>Tipo de Reclamación *</label>
              <select value={formData.tipo} onChange={e => setFormData({...formData, tipo: e.target.value})}>
                <option value="Reclamo">Reclamo (Disconformidad relacionada a los productos o servicios)</option>
                <option value="Queja">Queja (Disconformidad no relacionada directamente a los productos o servicios)</option>
              </select>
            </div>

            <div className="form-group">
              <label>Detalle de la Reclamación *</label>
              <textarea rows="3" required value={formData.detalle} onChange={e => setFormData({...formData, detalle: e.target.value})} placeholder="Describa los hechos ocurridos..."></textarea>
            </div>

            <div className="form-group">
              <label>Pedido del Consumidor *</label>
              <textarea rows="2" required value={formData.pedido} onChange={e => setFormData({...formData, pedido: e.target.value})} placeholder="Indique qué solución solicita..."></textarea>
            </div>

            <div className="modal-footer">
              <button type="button" className="btn-secondary" onClick={onClose}>Cancelar</button>
              <button type="submit" className="btn-primary"><Send size={16} /> Enviar Reclamación</button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
