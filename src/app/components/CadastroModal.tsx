import React, { useState, useEffect } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Box } from "@mui/material";

type Usuario = {
  idade: string;
  telefone: string;
  usuario: string;
};

export function CadastroModal({
  open,
  onClose,
  onSubmit,
  initialData
}: {
  open: boolean;
  onClose: () => void;
  onSubmit: (dados: Usuario) => void;
  initialData?: Usuario | null;
}) {
  const [idade, setIdade] = useState("");
  const [telefone, setTelefone] = useState("");
  const [usuario, setUsuario] = useState("");

  useEffect(() => {
    if (initialData) {
      setIdade(initialData.idade);
      setTelefone(initialData.telefone);
      setUsuario(initialData.usuario);
    } else {
      setIdade("");
      setTelefone("");
      setUsuario("");
    }
  }, [initialData, open]);

  const handleSubmit = () => {
    onSubmit({ idade, telefone, usuario });
    setIdade("");
    setTelefone("");
    setUsuario("");
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Complete seu cadastro</DialogTitle>
      <DialogContent>
        <Box display="flex" flexDirection="column" gap={2} mt={1}>
          <TextField
            label="Idade"
            type="number"
            value={idade}
            onChange={(e) => setIdade(e.target.value)}
            fullWidth
          />
          <TextField
            label="Telefone"
            type="tel"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            fullWidth
          />
          <TextField
            label="Nome de Usuário"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            fullWidth
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancelar</Button>
        <Button onClick={handleSubmit} variant="contained">Salvar</Button>
      </DialogActions>
    </Dialog>
  );
}