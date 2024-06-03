import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import PropTypes from "prop-types"
import CheckItemsDetail from "./check-items-detail"

export default function CheckItems({
  checks,
  detailCheckData,
  onChangeStatusCheck,
  onDeleteCheck,
  onChangeRenameCheck,
  onGetDetailCheck,
  checkItem,
  handleCheckItemChange,
}) {
  return (
    <div className="flex flex-col gap-2">
      {checks.map((check, index) => {
        return (
          <div
            key={index + 1}
            className="flex justify-between gap-2 items-center">
            <div className="items-top flex space-x-2 items-center">
              <Checkbox
                checked={check?.itemCompletionStatus}
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  onChangeStatusCheck(check?.id)
                }}
              />
              <div className="flex items-center">
                <Input
                  className="border-none focus-visible:none"
                  value={checkItem[check.id] || check?.name}
                  onChange={(e) => {
                    e.preventDefault()
                    e.stopPropagation()

                    handleCheckItemChange(check.id, e.target.value)
                  }}
                  id="email"
                  type="text"
                  placeholder="Tambah Checklist"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <Button
                variant={"destructive"}
                className="w-max"
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  onDeleteCheck(check?.id)
                }}>
                Hapus
              </Button>
              <CheckItemsDetail
                check={check}
                detailCheckData={detailCheckData}
                onGetDetailCheck={onGetDetailCheck}
              />
              <Button
                className="w-max bg-yellow-500 hover:bg-yellow-500/80"
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  onChangeRenameCheck(check?.id)
                }}>
                Update
              </Button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

CheckItems.propTypes = {
  checks: PropTypes.array,
  detailCheckData: PropTypes.object,
  onChangeStatusCheck: PropTypes.func,
  onDeleteCheck: PropTypes.func,
  onChangeRenameCheck: PropTypes.func,
  onGetDetailCheck: PropTypes.func,
  checkItem: PropTypes.object,
  handleCheckItemChange: PropTypes.func,
}
