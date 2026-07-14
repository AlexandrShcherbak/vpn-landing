import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, contact, tariff, service, telegram_id, utm_source, utm_medium, utm_campaign, utm_content } = body;

  if (!name || !contact || (!tariff && service !== "personal")) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const webhookUrl = process.env.N8N_WEBHOOK_URL;
  if (webhookUrl) {
    await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        contact,
        tariff: tariff || "Личный сервер",
        service,
        telegram_id: telegram_id ?? null,
        source: "vpn-landing",
        utm_source: utm_source ?? null,
        utm_medium: utm_medium ?? null,
        utm_campaign: utm_campaign ?? null,
        utm_content: utm_content ?? null,
      }),
    });
  }

  return NextResponse.json({
    ok: true,
    bot_url: process.env.NEXT_PUBLIC_BOT_URL ?? null,
  });
}
