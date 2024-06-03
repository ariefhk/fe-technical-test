import { useToast } from "@/components/ui/use-toast"
import {
  useChangeStatusCheckMutation,
  useDeleteCheckMutation,
  useGetAllCheckQuery,
  useGetDetailCheckMutation,
  useRenameCheckMutation,
} from "@/store/api-slices/check-api-slice"
import PropTypes from "prop-types"
import { useState } from "react"
import CheckItems from "../check/check-items"

function CheckListItem({ checkListId }) {
  const { data: checks, isSuccess: isSuccessChecks } = useGetAllCheckQuery({
    checkListId: checkListId,
  })
  const [changeStatusCheck] = useChangeStatusCheckMutation()
  const [renameCheck] = useRenameCheckMutation()
  const [deleteCheck] = useDeleteCheckMutation()
  const [detailCheck, { data: detailCheckData }] = useGetDetailCheckMutation()
  const { toast } = useToast()
  const [checkItemInputs, setCheckItemInputs] = useState({})

  const onChangeStatusCheck = async (id) => {
    try {
      await changeStatusCheck({
        checkListId: checkListId,
        id,
      }).unwrap()

      toast({
        title: "Berhasil Mengubah Checklist!",
        description: `Selamat, Anda berhasil mengubah check`,
      })
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Gagal Ubah Check!",
        description: `Anda gagal menguabh Check!`,
      })
    }
  }

  const onDeleteCheck = async (id) => {
    try {
      await deleteCheck({
        checkListId: checkListId,
        id,
      }).unwrap()

      toast({
        title: "Berhasil Hapus Check!",
        description: `Selamat, Anda berhasil Hapus check`,
      })
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Gagal Hapus Check!",
        description: `Anda gagal Hapus Check!`,
      })
    }
  }

  const onChangeRenameCheck = async (id) => {
    try {
      const value = checkItemInputs[id]
      await renameCheck({
        checkListId: checkListId,
        id,
        itemName: value,
      }).unwrap()

      toast({
        title: "Berhasil Mengubah Checklist!",
        description: `Selamat, Anda berhasil mengubah check`,
      })
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Gagal Ubah Check!",
        description: `Anda gagal menguabh Check!`,
      })
    }
  }

  const onGetDetailCheck = async (id) => {
    await detailCheck({
      checkListId: checkListId,
      id,
    })
  }

  const handleCheckItemChange = (checkId, value) => {
    setCheckItemInputs((prev) => ({ ...prev, [checkId]: value }))
  }

  if (isSuccessChecks) {
    return (
      <CheckItems
        checks={checks}
        detailCheckData={detailCheckData}
        checkItem={checkItemInputs}
        handleCheckItemChange={handleCheckItemChange}
        onChangeRenameCheck={onChangeRenameCheck}
        onChangeStatusCheck={onChangeStatusCheck}
        onDeleteCheck={onDeleteCheck}
        onGetDetailCheck={onGetDetailCheck}
      />
    )
  }

  return <div>Loadingg..</div>
}

CheckListItem.propTypes = {
  checkListId: PropTypes.number,
}

export default CheckListItem
