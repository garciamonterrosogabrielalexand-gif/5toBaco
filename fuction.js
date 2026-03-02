async function generarPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Obtener datos del formulario
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const telefono = document.getElementById("telefono").value;
    const perfil = document.getElementById("perfil").value;
    const experiencia = document.getElementById("experiencia").value;
    const educacion = document.getElementById("educacion").value;
    const habilidades = document.getElementById("habilidades").value;
    const dowloadPdf = document.getElementById("dowloadPdf").value;

    // Diseño del PDF
    doc.setFont("helvetica", "bold");
    doc.setFontSize(18);
    doc.text(nombre, 20, 20);

    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.text(`Email: ${email}`, 20, 30);
    doc.text(`Teléfono: ${telefono}`, 20, 38);

    doc.setFont("helvetica", "bold");
    doc.text("Perfil Profesional", 20, 50);
    doc.setFont("helvetica", "normal");
    doc.text(perfil, 20, 58, { maxWidth: 170 });

    doc.setFont("helvetica", "bold");
    doc.text("Experiencia Laboral", 20, 75);
    doc.setFont("helvetica", "normal");
    doc.text(experiencia, 20, 83, { maxWidth: 170 });

    doc.setFont("helvetica", "bold");
    doc.text("Educación", 20, 110);
    doc.setFont("helvetica", "normal");
    doc.text(educacion, 20, 118, { maxWidth: 170 });

    doc.setFont("helvetica", "bold");
    doc.text("Habilidades", 20, 140);
    doc.setFont("helvetica", "normal");
    doc.text(habilidades, 20, 148, { maxWidth: 170 });

    // Descargar PDF
    doc.save("Curriculum.pdf");
}