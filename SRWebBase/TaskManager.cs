using SRWebBase.Models.Controls;
using System.Collections.Concurrent;

namespace SRWebBase
{
    public enum TriggerSourceEnum
    {
        MessageBoxShow = 0,
        AutoExit = 1
    }

    public class MultiSourceEvent
    {
        private ManualResetEventSlim _event = new ManualResetEventSlim(false);
        private TriggerSourceEnum? _triggerSource;

        public void Set(TriggerSourceEnum source)
        {
            _triggerSource = source;
            _event.Set();
        }

        public (bool, TriggerSourceEnum?) Wait( )
        {
            bool signaled = _event.Wait(-1);
            if (signaled)
            { 
                var triggerSource = _triggerSource;
                _event.Reset();
                _triggerSource = null;
                return (true, triggerSource);
            }
            return (false, null);
        }
    }

    public enum TaskTypeEnum
    {
        MessageBox
    }
    public class TaskInfo
    {
        readonly private MsgBox msgBox;
        public string? TaskId { get; set; }
        public bool IsCompleted { get; set; }
        public TaskTypeEnum TaskType { get; set; } = TaskTypeEnum.MessageBox;
        public string? Result { get; set; }
        public TaskInfo()
        {
            msgBox = new MsgBox(this);
        }
        public MultiSourceEvent MessageBoxEvent {  get; set; } = new ();

        public ManualResetEventSlim WaitMsgEvent = new ManualResetEventSlim(false);

        public MsgBox MsgBox { get => msgBox;   }
    }
    public interface ITaskManager
    {
        ConcurrentDictionary<string, TaskInfo> TaskInfos { get; } 
    }
    public class TaskManager : ITaskManager
    {
        readonly ConcurrentDictionary<string, TaskInfo> _TaskInfos; 
        public TaskManager()
        {
            _TaskInfos = new(); 
        }

        public ConcurrentDictionary<string, TaskInfo> TaskInfos => _TaskInfos; 
    }
}
