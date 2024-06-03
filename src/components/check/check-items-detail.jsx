import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import PropTypes from "prop-types"

export default function CheckItemsDetail({
  check,
  detailCheckData,
  onGetDetailCheck,
}) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button onClick={() => onGetDetailCheck(check?.id)}>Detail</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Id: {detailCheckData?.id}</AlertDialogTitle>
          <AlertDialogTitle>
            Nama Check: {detailCheckData?.name}
          </AlertDialogTitle>
          <AlertDialogTitle>
            Status Check:{" "}
            {detailCheckData?.itemCompletionStatus ? "Sudah" : "Belum"}
          </AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Tutup</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

CheckItemsDetail.propTypes = {
  check: PropTypes.object,
  detailCheckData: PropTypes.object,
  onGetDetailCheck: PropTypes.func,
}
