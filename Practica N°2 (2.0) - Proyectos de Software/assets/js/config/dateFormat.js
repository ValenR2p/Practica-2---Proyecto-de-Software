export default function dateFormat(dateString) {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit'};
    return new Date(dateString).toLocaleDateString('es-AR', options);
}