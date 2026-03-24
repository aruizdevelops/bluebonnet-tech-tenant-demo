'use client';

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from '@mui/material';
import { useTranslation } from '../../i18n/useTranslation';

export default function ConfirmDialog({ open, title, message, confirmLabel, onConfirm, onCancel }) {
  const { t } = useTranslation();
  return (
    <Dialog open={open} onClose={onCancel} maxWidth="xs" fullWidth>
      <DialogTitle sx={{ fontWeight: 600 }}>{title || t('admin.common.confirmAction')}</DialogTitle>
      <DialogContent>
        <DialogContentText>{message || t('admin.common.confirmProceed')}</DialogContentText>
      </DialogContent>
      <DialogActions sx={{ px: 3, pb: 2 }}>
        <Button onClick={onCancel} color="inherit">
          {t('admin.common.cancel')}
        </Button>
        <Button onClick={onConfirm} variant="contained" color="error">
          {confirmLabel || t('admin.common.delete')}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
