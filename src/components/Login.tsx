import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { login } from "@/api/services/authService";
import type { Credentials } from "@/api/types/authCredentials";

export default function Login() {
  const [credentials, setCredentials] = useState<Credentials>({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    try {
      const data = await login(credentials);
      console.log("Logado:", data);
    } catch (err) {
      console.error("Erro ao logar:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 to-gray-900 flex items-center justify-center p-4 w-full">
      <Card className="w-full max-w-md shadow-xl bg-white dark:bg-gray-900">
        <CardContent className="p-6 space-y-6">
          <div className="flex flex-row justify-center items-center p-4">
            <h2 className="text-4xl font-semibold text-gray-800 dark:text-white">
              Miau Sociau
            </h2>
          </div>
          <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white">
            Entrar
          </h1>

          <div className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                value={credentials.email}
                onChange={(e) =>
                  setCredentials({ ...credentials, email: e.target.value })
                }
                className="w-full px-4 py-2 rounded-md border border-gray-300 dark:bg-gray-800 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Senha
              </label>
              <input
                id="password"
                type="password"
                value={credentials.password}
                onChange={(e) =>
                  setCredentials({ ...credentials, password: e.target.value })
                }
                className="w-full px-4 py-2 rounded-md border border-gray-300 dark:bg-gray-800 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <Button className="w-full" onClick={handleLogin} disabled={loading}>
              {loading ? "Entrando..." : "Entrar"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
