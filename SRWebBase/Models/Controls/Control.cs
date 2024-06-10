
using SRWebBase.Models.Enum;
using System.Drawing;
using System.Reflection;
using System.Text.Json.Serialization;
 

namespace SRWebBase.Models.Controls
{
    public class Control  
    {
        [JsonIgnore]
        public MsgBox? MessageBox = null;
 
        public void ActiveControl(MsgBox messageBox)
        {
            MessageBox = messageBox;
        }
        public Control()
        {
            Id = Guid.NewGuid().ToString();
            EventObjest.Add(s_clickEvent);
            EventObjest.Add(s_textEvent);
        }
        public class EventObject: EventArgs
        {
            public EventType EventType = EventType.Unknown;
           
            public EventObject(EventType eventType)
            {
                EventType = eventType;
            }
        }
        [JsonIgnore]
        private static readonly EventObject s_clickEvent = new EventObject(EventType.OnClick);
        [JsonIgnore]
        private static readonly EventObject s_textEvent = new EventObject(EventType.TextChanged);

        List<EventObject> _eventObjest = new List<EventObject>();
        [JsonIgnore]
        public List<EventObject> EventObjest { get => _eventObjest; set => _eventObjest = value; }
 
        public event EventHandler<EventObject>? Click;
 
        public event EventHandler<EventObject>? TextChanged;

        protected virtual void OnClick(EventObject e)
        {
            Click?.Invoke(this, e);
        }
         
        protected virtual void OnTextChanged(EventObject e)
        {
            TextChanged?.Invoke(this, e);
        }
        public virtual void RunEvent(EventObject eventObj)
        {
            switch(eventObj.EventType)
            {
                case  EventType.OnClick:
                    Click?.Invoke(this, eventObj);
                    break;
                case EventType.TextChanged:
                    TextChanged?.Invoke(this, eventObj);
                    break;
                  
                default:
                    break;
            }
        }
        public virtual void SetAttributeValue(string attName, string value)
        {
            PropertyInfo? property = this.GetType().GetProperty(attName);
            if (property != null)
            {
                if (property.PropertyType.Equals(typeof(string)))
                {
                    property.SetValue(this, value, null);
                }
                else if (property.PropertyType.Equals(typeof(int)))
                {
                    property.SetValue(this, int.Parse(value), null);
                }
            }
        }
 
        public List<Control> Controls { get; set; } = new List<Control>();

        private string _text = string.Empty;
        public string Text
        {
            get { return _text; }
            set
            {
                if (value is null)
                {
                    value = string.Empty;
                }

                if (value == Text)
                { 
                    return;
                }
                _text = value;
                OnTextChanged(new EventObject(EventType.TextChanged));
            }
        }
        public Color BackColor { get; set; }    = Color.White;
        public string FontName { get; set; } = "Yu Gothic UI";
        public float FontSize { get; set; } = 15.0f;
        public int[] Location { get; set; } = new int[2] { 0, 0 };
        public int MaxLength { get; set; } = 3000;
        //Multiline = true;
        public string Name { get; set; } = string.Empty;
        public string Id { get; set; } = string.Empty;
        public int[] Size { get; set; } = new int[2] { 0, 0 };

        public string TextAlign { get; set; } = "left";
        public string BackgroundColorHex
        {
            get
            {
                return $"#{BackColor.R:X2}{BackColor.G:X2}{BackColor.B:X2}";
            }
        }

    }
}
