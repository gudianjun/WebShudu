using SRWebBase.Models.Enum;
using System.Diagnostics;
using System.Security.Claims;

namespace SRWebBase.Models.Controls
{
    public class MsgBox
    {
        public string Text { get; set; } = string.Empty;
        public string Title { get; set; } = string.Empty;
        public MessageBoxButtons Buttons { get; set; } = MessageBoxButtons.YesNo;

        readonly TaskInfo _taskInfo;
        public MsgBox(TaskInfo taskInfo)
        {
            _taskInfo = taskInfo;
        }

        public DialogResult Show(string text, string title = "", MessageBoxButtons buttons = MessageBoxButtons.YesNo)
        {
            Text = text;
            Title = title;
            Buttons = buttons;
            _taskInfo.MessageBoxEvent.Set(TriggerSourceEnum.MessageBoxShow);
            _taskInfo.WaitMsgEvent.Wait();
            _taskInfo.WaitMsgEvent.Reset();
            return DialogResult.OK;
        }
    }
}
