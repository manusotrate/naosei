'use client';
import React, { useState } from "react";
import {
  Container,
  Box,
  Button,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Typography,
  Card,
  CardContent,
  Divider
} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { CadastroModal } from "../components/CadastroModal";

type Usuario = {
  idade: string;
  telefone: string;
  usuario: string;
};

export default function Page() {
  const [modalOpen, setModalOpen] = useState(false);
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [editData, setEditData] = useState<Usuario | null>(null);

  const handleCadastroSubmit = (dados: Usuario) => {
    if (editIndex !== null && editData) {
      const novosUsuarios = [...usuarios];
      novosUsuarios[editIndex] = dados;
      setUsuarios(novosUsuarios);
      setEditIndex(null);
      setEditData(null);
    } else {
      setUsuarios([...usuarios, dados]);
    }
    setModalOpen(false);
  };

  const handleDelete = (index: number) => {
    setUsuarios(usuarios.filter((_, i) => i !== index));
  };

  const handleEdit = (index: number) => {
    setEditIndex(index);
    setEditData(usuarios[index]);
    setModalOpen(true);
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
              Gerenciamento de Usuários
            </Typography>
            <Divider sx={{ mb: 3, bgcolor: "#e0d7f3" }} />
            <Button
              variant="contained"
              onClick={() => { setEditIndex(null); setEditData(null); setModalOpen(true); }}
              sx={{
                mb: 4,
                bgcolor: "#7c3aed",
                color: "#fff",
                fontWeight: 600,
                borderRadius: 2,
                px: 4,
                py: 1.2,
                boxShadow: 2,
                '&:hover': { bgcolor: "#a78bfa" }
              }}
            >
              Novo Usuário
            </Button>
            <CadastroModal
              open={modalOpen}
              onClose={() => { setModalOpen(false); setEditIndex(null); setEditData(null); }}
              onSubmit={handleCadastroSubmit}
              initialData={editData}
            />
            <Typography
              variant="h6"
              align="center"
              gutterBottom
              sx={{ color: "#6d28d9", fontWeight: 500 }}
            >
              Usuários cadastrados
            </Typography>
            <List>
              {usuarios.length === 0 && (
                <Typography align="center" color="#bdbdbd" sx={{ mt: 2 }}>
                  Nenhum usuário cadastrado.
                </Typography>
              )}
              {usuarios.map((user, idx) => (
                <ListItem
                  key={idx}
                  sx={{
                    bgcolor: "#fff",
                    mb: 2,
                    borderRadius: 2,
                    boxShadow: 1,
                    border: "1px solid #e0d7f3",
                    transition: "box-shadow 0.2s",
                    "&:hover": { boxShadow: 4, bgcolor: "#ede9fe" }
                  }}
                  secondaryAction={
                    <Box>
                      <IconButton edge="end" aria-label="edit" onClick={() => handleEdit(idx)} sx={{ color: "#7c3aed" }}>
                        <EditIcon />
                      </IconButton>
                      <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(idx)} sx={{ color: "#111827" }}>
                        <DeleteIcon />
                      </IconButton>
                    </Box>
                  }
                >
                  <ListItemText
                    primary={
                      <Typography fontWeight={600} sx={{ color: "#7c3aed" }}>
                        {user.usuario}
                      </Typography>
                    }
                    secondary={
                      <Typography component="span" sx={{ color: "#6d28d9" }}>
                        Idade: {user.idade} | Telefone: {user.telefone}
                      </Typography>
                    }
                  />
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}