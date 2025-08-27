'use client';
import React, { useState } from "react";
import { Container, Box, TextField, Button, Card, CardContent, Typography, Divider } from "@mui/material";
import { useRouter } from 'next/navigation';

export default function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    // Aqui você pode validar o login se quiser
    router.push('/usuarios');
  };

  return (
    <Container maxWidth="sm" sx={{ bgcolor: "#f6f4fa", minHeight: "100vh", py: 6 }}>
      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="80vh">
        <Card
          sx={{
            width: "100%",
            bgcolor: "#f6f4fa",
            borderRadius: 4,
            boxShadow: 6,
            p: 3,
            border: "1px solid #e0d7f3"
          }}
        >
          <CardContent>
            <Typography
              variant="h4"
              align="center"
              gutterBottom
              fontWeight={700}
              sx={{ color: "#7c3aed" }}
            >
              Login do Sistema
            </Typography>
            <Divider sx={{ mb: 3, bgcolor: "#e0d7f3" }} />
            <Box
              component="form"
              display="flex"
              flexDirection="column"
              alignItems="center"
              gap={2}
              autoComplete="off"
              onSubmit={e => { e.preventDefault(); handleLogin(); }}
            >
              <TextField
                id="email-input"
                label="Email"
                type="email"
                autoComplete="email"
                sx={{ width: '300px' }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                sx={{ width: '300px' }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                variant="contained"
                disableElevation
                sx={{
                  mt: 2,
                  bgcolor: "#7c3aed",
                  color: "#fff",
                  fontWeight: 600,
                  borderRadius: 2,
                  px: 4,
                  py: 1.2,
                  boxShadow: 2,
                  '&:hover': { bgcolor: "#a78bfa" }
                }}
                onClick={handleLogin}
                type="submit"
              >
                Entrar
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}