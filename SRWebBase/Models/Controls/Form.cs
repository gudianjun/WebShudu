namespace SRWebBase.Models.Controls
{
    public class Form : Control
    {
        public event EventHandler<EventObject>? Load;

        protected virtual void OnLoad(EventObject e)
        {
            Load?.Invoke(this, e);
        }
        public Form()
        { 
        }
        public override void RunEvent( EventObject eventObject)
        {
            switch (eventObject.EventType)
            {
                case  Enum.EventType.FromOnload:
                    Load?.Invoke(this, eventObject);
                    break; 
                default:
                    RunEvent(eventObject);
                    break;
            } 
        }
    }
}
