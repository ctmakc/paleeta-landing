export default function Home() {
  return (
    <main className="min-h-screen" style={{ fontFamily: "Georgia, 'Times New Roman', serif", background: "#0a0a0a" }}>

      {/* HERO SECTION */}
      <section
        style={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, #1a0a00 0%, #0d0600 30%, #1a0800 60%, #0a0a0a 100%)",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* Decorative background circles */}
        <div style={{
          position: "absolute", top: "-10%", right: "-5%",
          width: "600px", height: "600px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(201,150,26,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", bottom: "10%", left: "-10%",
          width: "500px", height: "500px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(192,57,43,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "80px 24px", width: "100%", position: "relative", zIndex: 1 }}>

          {/* FREE TRAINING Badge */}
          <div style={{ textAlign: "center", marginBottom: "28px" }}>
            <span style={{
              display: "inline-block",
              background: "linear-gradient(135deg, #b8860b, #ffd700, #b8860b)",
              color: "#1a0800",
              fontWeight: 900,
              fontSize: "13px",
              letterSpacing: "0.15em",
              padding: "8px 28px",
              borderRadius: "4px",
              textTransform: "uppercase",
              boxShadow: "0 4px 20px rgba(255,215,0,0.3)",
            }}>
              ★ FREE TRAINING ★
            </span>
          </div>

          {/* Main Headline */}
          <h1 style={{
            textAlign: "center",
            fontSize: "clamp(2.5rem, 7vw, 5.5rem)",
            fontWeight: 900,
            lineHeight: 1.1,
            marginBottom: "20px",
            textShadow: "2px 2px 20px rgba(0,0,0,0.5)",
          }}>
            <span style={{
              background: "linear-gradient(135deg, #ffd700 0%, #daa520 50%, #ffd700 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Exhausted Mom?
            </span>
          </h1>

          {/* Sub Headline */}
          <h2 style={{
            textAlign: "center",
            fontSize: "clamp(1.6rem, 4vw, 3rem)",
            fontWeight: 700,
            color: "#fff",
            marginBottom: "16px",
            lineHeight: 1.2,
          }}>
            Build a Healthier Lifestyle
          </h2>
          <h3 style={{
            textAlign: "center",
            fontSize: "clamp(1.1rem, 2.5vw, 1.8rem)",
            fontWeight: 400,
            color: "rgba(255,255,255,0.8)",
            marginBottom: "48px",
            fontStyle: "italic",
          }}>
            For Your Family — Without the Overwhelm
          </h3>

          {/* CTA Button */}
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <a
              href="#register"
              style={{
                display: "inline-block",
                background: "linear-gradient(135deg, #b8860b 0%, #ffd700 40%, #daa520 70%, #b8860b 100%)",
                color: "#1a0800",
                fontWeight: 900,
                fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
                letterSpacing: "0.05em",
                padding: "20px 52px",
                borderRadius: "6px",
                textDecoration: "none",
                border: "2px solid #ffd700",
                boxShadow: "0 8px 30px rgba(255,215,0,0.35)",
                textTransform: "uppercase",
                transition: "all 0.3s ease",
              }}
            >
              WATCH THE FREE TRAINING →
            </a>
          </div>

          {/* Trust bullets */}
          <div style={{ textAlign: "center" }}>
            <p style={{
              color: "rgba(255,255,255,0.6)",
              fontSize: "0.9rem",
              letterSpacing: "0.08em",
            }}>
              No Crazy Diets &nbsp;•&nbsp; No Complicated Workouts &nbsp;•&nbsp; No Doing It Alone
            </p>
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, #C9961A, transparent)" }} />

      {/* WHO THIS IS FOR */}
      <section style={{ background: "#0f0700", padding: "80px 24px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ color: "#C9961A", fontSize: "0.85rem", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "16px" }}>
            Does This Sound Like You?
          </p>
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700, color: "#fff", marginBottom: "48px", lineHeight: 1.3 }}>
            You're Doing Everything for Everyone Else —<br />
            <span style={{ color: "#ffd700" }}>But What About You?</span>
          </h2>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "24px",
            marginBottom: "48px",
          }}>
            {[
              { icon: "😴", text: "You wake up exhausted even after 7–8 hours of sleep" },
              { icon: "🍕", text: "You eat last — whatever's left — and call it dinner" },
              { icon: "🏃‍♀️", text: "Exercise feels impossible when you're running on empty" },
              { icon: "💭", text: "You know you need to change, but don't know where to start" },
              { icon: "👨‍👩‍👧‍👦", text: "You want to be a healthy role model for your kids" },
              { icon: "🔋", text: "You've tried diets before — and they never stick" },
            ].map((item, i) => (
              <div key={i} style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
                border: "1px solid rgba(201, 150, 26, 0.2)",
                borderRadius: "12px",
                padding: "28px 24px",
                textAlign: "left",
              }}>
                <div style={{ fontSize: "2rem", marginBottom: "12px" }}>{item.icon}</div>
                <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1rem", lineHeight: 1.6, margin: 0 }}>{item.text}</p>
              </div>
            ))}
          </div>
          <p style={{ fontSize: "1.3rem", color: "#ffd700", fontStyle: "italic", fontWeight: 600 }}>
            If you said yes to even one of these — this training is for you.
          </p>
        </div>
      </section>

      {/* DIVIDER */}
      <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, #C9961A, transparent)" }} />

      {/* WHAT YOU'LL LEARN */}
      <section style={{ background: "#0a0a0a", padding: "80px 24px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <p style={{ color: "#C9961A", fontSize: "0.85rem", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "16px" }}>
              What You'll Discover
            </p>
            <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700, color: "#fff", lineHeight: 1.3 }}>
              In This Free Training You'll Learn:
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {[
              {
                num: "01",
                title: "The 3 Real Reasons Moms Struggle with Their Health",
                desc: "It's not willpower or time — it's something simpler that nobody talks about.",
              },
              {
                num: "02",
                title: "A Simple Daily Routine That Takes Under 20 Minutes",
                desc: "No gym membership required. No special equipment. Works around your family's schedule.",
              },
              {
                num: "03",
                title: "What to Eat Without Counting Calories or Going on a Diet",
                desc: "Real food your whole family will love, that also fuels your energy all day.",
              },
              {
                num: "04",
                title: "How to Get Your Family On Board",
                desc: "Create a household culture of health — without becoming the 'food police'.",
              },
              {
                num: "05",
                title: "The Mindset Shift That Changes Everything",
                desc: "Stop feeling guilty for putting yourself first — and watch how it transforms your family.",
              },
            ].map((item, i) => (
              <div key={i} style={{
                display: "flex",
                gap: "24px",
                alignItems: "flex-start",
                background: "linear-gradient(135deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))",
                border: "1px solid rgba(201, 150, 26, 0.15)",
                borderRadius: "12px",
                padding: "28px",
              }}>
                <div style={{
                  flexShrink: 0,
                  background: "linear-gradient(135deg, #b8860b, #ffd700)",
                  color: "#1a0800",
                  fontWeight: 900,
                  fontSize: "0.85rem",
                  width: "52px",
                  height: "52px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                  {item.num}
                </div>
                <div>
                  <h3 style={{ color: "#ffd700", fontSize: "1.15rem", fontWeight: 700, marginBottom: "8px", marginTop: 0 }}>
                    {item.title}
                  </h3>
                  <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "1rem", lineHeight: 1.6, margin: 0 }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, #C9961A, transparent)" }} />

      {/* ABOUT PALEETA */}
      <section style={{ background: "#0f0700", padding: "80px 24px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ color: "#C9961A", fontSize: "0.85rem", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "16px" }}>
            Your Guide
          </p>
          <div style={{
            width: "100px", height: "100px", borderRadius: "50%",
            background: "linear-gradient(135deg, #b8860b, #ffd700)",
            margin: "0 auto 28px",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "2.5rem",
            boxShadow: "0 0 30px rgba(255,215,0,0.3)",
          }}>
            👩
          </div>
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 700, color: "#fff", marginBottom: "8px" }}>
            Paleeta Bhola
          </h2>
          <p style={{ color: "#C9961A", fontSize: "1rem", marginBottom: "28px", fontStyle: "italic" }}>
            Wellness Coach for Busy Moms
          </p>
          <div style={{ textAlign: "left", display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "1.05rem", lineHeight: 1.8, margin: 0 }}>
              As a mom herself, Paleeta knows exactly what it feels like to put everyone else first — and end up running on empty.
              After years of struggling with her own health while raising a family, she discovered a simple, sustainable approach
              that changed everything.
            </p>
            <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "1.05rem", lineHeight: 1.8, margin: 0 }}>
              Today she helps hundreds of moms just like you break free from the cycle of exhaustion, build real energy,
              and create a healthy lifestyle their whole family can enjoy — without crazy restrictions or hours at the gym.
            </p>
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, #C9961A, transparent)" }} />

      {/* TESTIMONIALS */}
      <section style={{ background: "#0a0a0a", padding: "80px 24px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <p style={{ color: "#C9961A", fontSize: "0.85rem", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "16px" }}>
              Real Results
            </p>
            <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700, color: "#fff" }}>
              Moms Who Made the Change
            </h2>
          </div>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
          }}>
            {[
              {
                name: "Sarah M.",
                role: "Mom of 3",
                quote: "I had zero energy before. After following Paleeta's approach for 4 weeks, I wake up ready to tackle the day. My kids even started eating better!",
                stars: 5,
              },
              {
                name: "Jennifer K.",
                role: "Working Mom",
                quote: "I tried every diet out there. This is the FIRST thing that actually stuck because it fits into real life, not some fantasy schedule.",
                stars: 5,
              },
              {
                name: "Maria L.",
                role: "Mom of 2",
                quote: "Paleeta doesn't just give you a plan — she gives you a whole new perspective. I finally stopped feeling guilty about taking care of myself.",
                stars: 5,
              },
            ].map((t, i) => (
              <div key={i} style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
                border: "1px solid rgba(201, 150, 26, 0.2)",
                borderRadius: "12px",
                padding: "32px 28px",
              }}>
                <div style={{ marginBottom: "16px", fontSize: "1.1rem", color: "#ffd700" }}>
                  {"★".repeat(t.stars)}
                </div>
                <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1rem", lineHeight: 1.7, marginBottom: "20px", fontStyle: "italic" }}>
                  "{t.quote}"
                </p>
                <div>
                  <p style={{ color: "#ffd700", fontWeight: 700, margin: 0, fontSize: "0.95rem" }}>{t.name}</p>
                  <p style={{ color: "rgba(255,255,255,0.5)", margin: 0, fontSize: "0.85rem" }}>{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, #C9961A, transparent)" }} />

      {/* FINAL CTA */}
      <section id="register" style={{
        background: "linear-gradient(135deg, #1a0a00 0%, #0f0500 50%, #1a0800 100%)",
        padding: "100px 24px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          width: "800px", height: "800px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(201,150,26,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: "700px", margin: "0 auto" }}>
          <p style={{ color: "#C9961A", fontSize: "0.85rem", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "20px" }}>
            Your Next Step
          </p>
          <h2 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 900, color: "#fff", marginBottom: "16px", lineHeight: 1.2 }}>
            Ready to Feel Like <span style={{ color: "#ffd700" }}>Yourself Again?</span>
          </h2>
          <p style={{ fontSize: "1.2rem", color: "rgba(255,255,255,0.75)", marginBottom: "48px", lineHeight: 1.6 }}>
            Join thousands of moms who are building healthier, happier lives — one simple step at a time.
            This free training could be the turning point you've been waiting for.
          </p>

          <a
            href="#"
            style={{
              display: "inline-block",
              background: "linear-gradient(135deg, #b8860b 0%, #ffd700 40%, #daa520 70%, #b8860b 100%)",
              color: "#1a0800",
              fontWeight: 900,
              fontSize: "clamp(1.1rem, 2.5vw, 1.35rem)",
              letterSpacing: "0.05em",
              padding: "22px 60px",
              borderRadius: "6px",
              textDecoration: "none",
              border: "2px solid #ffd700",
              boxShadow: "0 0 40px rgba(255,215,0,0.3), 0 8px 30px rgba(0,0,0,0.4)",
              textTransform: "uppercase",
              marginBottom: "24px",
            }}
          >
            YES! I WANT THE FREE TRAINING →
          </a>

          <div style={{ marginTop: "28px" }}>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.9rem", letterSpacing: "0.05em" }}>
              🔒 100% Free &nbsp;•&nbsp; No Credit Card Required &nbsp;•&nbsp; Instant Access
            </p>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.85rem", marginTop: "8px" }}>
              No Crazy Diets &nbsp;•&nbsp; No Complicated Workouts &nbsp;•&nbsp; No Doing It Alone
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        background: "#060300",
        borderTop: "1px solid rgba(201,150,26,0.1)",
        padding: "32px 24px",
        textAlign: "center",
      }}>
        <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.85rem", margin: 0 }}>
          © 2024 Paleeta Bhola. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
