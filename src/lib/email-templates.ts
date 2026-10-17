const COLORS = {
  forest: "#2b4827",
  forestDeep: "#1a2e18",
  mustard: "#c9a227",
  cream: "#f7f5f0",
  muted: "#5c6b62",
  white: "#ffffff",
  foreground: "#1a2e22",
};

const SITE_NAME = "Haldia Peyzaj ve Mimarlık";
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://haldiapeyzaj.com";
const CONTACT_EMAIL =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "info@haldiapeyzaj.com";

export function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

export function makeReferenceId() {
  const stamp = Date.now().toString(36).toUpperCase();
  const rand = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `HLD-${stamp}-${rand}`;
}

function emailShell(inner: string) {
  return `<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${SITE_NAME}</title>
</head>
<body style="margin:0;padding:0;background:${COLORS.cream};font-family:Segoe UI,Roboto,Helvetica,Arial,sans-serif;color:${COLORS.foreground};">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${COLORS.cream};padding:28px 12px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;">
          <tr>
            <td align="center" style="padding-bottom:16px;">
              <p style="margin:0;font-size:18px;font-weight:700;letter-spacing:0.18em;color:${COLORS.forest};">HALDİA</p>
              <p style="margin:4px 0 0;font-size:11px;letter-spacing:0.14em;text-transform:uppercase;color:${COLORS.mustard};">Peyzaj ve Mimarlık</p>
            </td>
          </tr>
          <tr>
            <td>${inner}</td>
          </tr>
          <tr>
            <td style="padding-top:18px;border-top:1px solid #ebe7df;">
              <p style="margin:0 0 4px;font-size:13px;font-weight:700;color:${COLORS.forest};">${SITE_NAME}</p>
              <p style="margin:0;font-size:12px;line-height:1.6;color:${COLORS.muted};">
                Doğanın estetiğini bilimsel ve ekolojik doğrularla harmanlıyoruz.<br />
                <a href="mailto:${CONTACT_EMAIL}" style="color:${COLORS.forest};text-decoration:none;">${CONTACT_EMAIL}</a>
                &nbsp;·&nbsp;
                <a href="${SITE_URL}" style="color:${COLORS.forest};text-decoration:none;">haldiapeyzaj.com</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function voucherCard(opts: {
  eyebrow: string;
  title: string;
  accent: string;
  bodyHtml: string;
  footerHtml?: string;
}) {
  return `
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${COLORS.white};border:1px solid #ebe7df;border-radius:4px;overflow:hidden;">
    <tr>
      <td style="background:${opts.accent};padding:14px 22px;">
        <p style="margin:0;font-size:11px;letter-spacing:0.14em;text-transform:uppercase;color:rgba(255,255,255,0.88);font-weight:600;">
          ${escapeHtml(opts.eyebrow)}
        </p>
        <p style="margin:6px 0 0;font-size:20px;line-height:1.25;font-weight:700;color:${COLORS.white};">
          ${escapeHtml(opts.title)}
        </p>
      </td>
    </tr>
    <tr>
      <td style="padding:22px;">${opts.bodyHtml}</td>
    </tr>
    ${
      opts.footerHtml
        ? `<tr>
      <td style="padding:0 22px 20px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${COLORS.cream};border-radius:4px;">
          <tr>
            <td style="padding:12px 14px;font-size:12px;color:${COLORS.muted};">
              ${opts.footerHtml}
            </td>
          </tr>
        </table>
      </td>
    </tr>`
        : ""
    }
  </table>`;
}

function detailRow(label: string, valueHtml: string) {
  return `
  <tr>
    <td style="padding:8px 0;border-bottom:1px solid #ebe7df;width:34%;font-size:12px;color:${COLORS.muted};vertical-align:top;">
      ${escapeHtml(label)}
    </td>
    <td style="padding:8px 0;border-bottom:1px solid #ebe7df;font-size:14px;color:${COLORS.foreground};font-weight:600;vertical-align:top;">
      ${valueHtml}
    </td>
  </tr>`;
}

export type ContactMailPayload = {
  name: string;
  email: string;
  phone: string;
  message: string;
  referenceId: string;
};

export function buildInboundAdminEmail(data: ContactMailPayload) {
  const bodyHtml = `
    <p style="margin:0 0 16px;font-size:14px;line-height:1.55;color:${COLORS.muted};">
      Siteden yeni bir teklif / iletişim talebi geldi.
    </p>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
      ${detailRow("Referans", escapeHtml(data.referenceId))}
      ${detailRow("Ad Soyad", escapeHtml(data.name))}
      ${detailRow(
        "E-posta",
        `<a href="mailto:${escapeHtml(data.email)}" style="color:${COLORS.forest};text-decoration:none;">${escapeHtml(data.email)}</a>`,
      )}
      ${detailRow(
        "Telefon",
        data.phone
          ? `<a href="tel:${escapeHtml(data.phone)}" style="color:${COLORS.foreground};text-decoration:none;">${escapeHtml(data.phone)}</a>`
          : "—",
      )}
    </table>
    <p style="margin:18px 0 8px;font-size:12px;letter-spacing:0.08em;text-transform:uppercase;color:${COLORS.muted};font-weight:600;">
      Mesaj
    </p>
    <p style="margin:0;padding:14px 16px;background:${COLORS.cream};border-left:3px solid ${COLORS.mustard};font-size:14px;line-height:1.6;color:${COLORS.foreground};">
      ${escapeHtml(data.message).replaceAll("\n", "<br />")}
    </p>
  `;

  const html = emailShell(
    voucherCard({
      eyebrow: "Yeni talep",
      title: "Teklif / İletişim formu",
      accent: COLORS.forest,
      bodyHtml,
      footerHtml: `<strong style="color:${COLORS.foreground};">Yanıtla:</strong> Bu maili yanıtladığınızda doğrudan ziyaretçiye gidersiniz. Ref: ${escapeHtml(data.referenceId)}`,
    }),
  );

  const text = [
    `Yeni iletişim talebi — ${data.referenceId}`,
    `Ad Soyad: ${data.name}`,
    `E-posta: ${data.email}`,
    `Telefon: ${data.phone || "—"}`,
    "",
    "Mesaj:",
    data.message,
  ].join("\n");

  return {
    subject: `Yeni talep · ${data.name} · ${data.referenceId}`,
    html,
    text,
  };
}

export function buildVisitorAutoReplyEmail(data: ContactMailPayload) {
  const first = data.name.trim().split(/\s+/)[0] || data.name;
  const bodyHtml = `
    <p style="margin:0 0 14px;font-size:15px;line-height:1.6;color:${COLORS.foreground};">
      Merhaba <strong>${escapeHtml(first)}</strong>,
    </p>
    <p style="margin:0 0 16px;font-size:14px;line-height:1.6;color:${COLORS.muted};">
      Mesajınız bize ulaştı. En kısa sürede sizinle iletişime geçeceğiz.
      Bu e-posta talebinizin alındığını doğrulayan kaydınızdır.
    </p>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
      ${detailRow("Referans", escapeHtml(data.referenceId))}
      ${detailRow("Ad Soyad", escapeHtml(data.name))}
      ${detailRow("Telefon", escapeHtml(data.phone || "—"))}
    </table>
    <p style="margin:18px 0 8px;font-size:12px;letter-spacing:0.08em;text-transform:uppercase;color:${COLORS.muted};font-weight:600;">
      Gönderdiğiniz mesaj
    </p>
    <p style="margin:0;padding:14px 16px;background:${COLORS.cream};border-left:3px solid ${COLORS.mustard};font-size:14px;line-height:1.6;color:${COLORS.foreground};">
      ${escapeHtml(data.message).replaceAll("\n", "<br />")}
    </p>
  `;

  const html = emailShell(
    voucherCard({
      eyebrow: "Alındı onayı",
      title: "Talebiniz kayda geçti",
      accent: COLORS.forestDeep,
      bodyHtml,
      footerHtml: `İhtiyaç halinde bu referansı paylaşın: <strong style="color:${COLORS.foreground};">${escapeHtml(data.referenceId)}</strong>`,
    }),
  );

  const text = [
    `Merhaba ${first},`,
    "",
    "Mesajınız bize ulaştı. En kısa sürede sizinle iletişime geçeceğiz.",
    `Referans: ${data.referenceId}`,
    "",
    "Gönderdiğiniz mesaj:",
    data.message,
    "",
    SITE_NAME,
    CONTACT_EMAIL,
    SITE_URL,
  ].join("\n");

  return {
    subject: `Talebiniz alındı · ${data.referenceId}`,
    html,
    text,
  };
}
