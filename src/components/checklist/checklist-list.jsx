import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Skeleton } from "@/components/ui/skeleton"
import PropTypes from "prop-types"
import CheckListItem from "./checklist-item"

export default function CheckListList({
  isLoadingCheckList,
  checklists,
  isSuccessChecklist,
  onDeleteCheckList,
  onCreateCheck,
  checkInputs,
  handleCheckChange,
}) {
  return (
    <div className=" h-full flex flex-col gap-y-5">
      {isLoadingCheckList &&
        Array.from({ length: 5 }).map((_, index) => {
          return <Skeleton key={index + 1} className="w-full h-[400px] " />
        })}
      {isSuccessChecklist && checklists.length > 0 ? (
        checklists.map((checklist, index) => {
          return (
            <Card key={index + 1}>
              <CardHeader>
                <CardTitle>{checklist?.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <CheckListItem checkListId={checklist.id} />
              </CardContent>
              <CardFooter className="flex flex-col w-full space-y-2">
                <div className="space-y-2 w-full">
                  <Input
                    value={checkInputs[checklist.id] || ""}
                    onChange={(e) =>
                      handleCheckChange(checklist.id, e.target.value)
                    }
                    id={`item-${checklist.id}`}
                    type="text"
                    placeholder="Tambah List"
                    required
                  />
                  <Button
                    onClick={() => onCreateCheck(checklist?.id)}
                    variant="outline"
                    className="w-full">
                    Tambah Checklist
                  </Button>
                </div>
                <Button
                  onClick={() => onDeleteCheckList(checklist?.id)}
                  variant="outline"
                  className="w-full">
                  Hapus Checklist
                </Button>
              </CardFooter>
            </Card>
          )
        })
      ) : (
        <h1>Not Found Checklist!</h1>
      )}
    </div>
  )
}

CheckListList.propTypes = {
  isLoadingCheckList: PropTypes.bool,
  isSuccessChecklist: PropTypes.bool,
  checklists: PropTypes.array,
  onDeleteCheckList: PropTypes.func,
  onCreateCheck: PropTypes.func,
  checkInputs: PropTypes.object,
  handleCheckChange: PropTypes.func,
}
