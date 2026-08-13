import Link from "next/link";

export default function LoginPage() {
    return (
        <>
            <Link href="/" >
                <button type="button">Return Home Page</button>
            </Link>
            <main
                style={{
                    minHeight: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#f5f5f5",
                }}
            >
                <div
                    style={{
                        width: "350px",
                        padding: "30px",
                        backgroundColor: "white",
                        borderRadius: "10px",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                    }}
                >
                    <h1 style={{ textAlign: "center", marginBottom: "25px" }}>
                        Login
                    </h1>

                    <form>
                        <div style={{ marginBottom: "15px" }}>
                            <label htmlFor="email">Email</label>

                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="example@gmail.com"
                                style={{
                                    width: "100%",
                                    padding: "10px",
                                    marginTop: "5px",
                                    border: "1px solid #ccc",
                                    borderRadius: "5px",
                                    boxSizing: "border-box",
                                }}
                            />
                        </div>

                        <div style={{ marginBottom: "20px" }}>
                            <label htmlFor="password">Password</label>

                            <input
                                id="password"
                                name="password"
                                type="password"
                                placeholder="Enter your password"
                                style={{
                                    width: "100%",
                                    padding: "10px",
                                    marginTop: "5px",
                                    border: "1px solid #ccc",
                                    borderRadius: "5px",
                                    boxSizing: "border-box",
                                }}
                            />
                        </div>

                        <button
                            type="submit"
                            style={{
                                width: "100%",
                                padding: "10px",
                                border: "none",
                                borderRadius: "5px",
                                backgroundColor: "#0070f3",
                                color: "white",
                                cursor: "pointer",
                                fontSize: "16px",
                            }}
                        >
                            Login
                        </button>
                    </form>
                </div>
            </main>
        </>
    );
}