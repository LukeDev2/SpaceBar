const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.Sin,
		C3.Plugins.Keyboard,
		C3.Behaviors.scrollto,
		C3.Plugins.TiledBg,
		C3.Plugins.Text,
		C3.Plugins.Mouse,
		C3.Behaviors.Fade,
		C3.Plugins.Audio,
		C3.Plugins.Touch,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.Audio.Acts.Play,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Plugins.Touch.Cnds.OnTouchObject,
		C3.Plugins.Sprite.Acts.SetAnimFrame,
		C3.Behaviors.Sin.Acts.SetEnabled,
		C3.Behaviors.scrollto.Acts.Shake,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.System.Cnds.IsGroupActive,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.System.Acts.CreateObject,
		C3.Plugins.System.Acts.SubVar,
		C3.Plugins.Sprite.Acts.SetInstanceVar,
		C3.Plugins.System.Exps.choose,
		C3.Plugins.Sprite.Acts.AddInstanceVar,
		C3.Plugins.System.Cnds.Every,
		C3.Plugins.Sprite.Cnds.CompareInstanceVar,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.Mouse.Cnds.OnObjectClicked
	];
};
self.C3_JsPropNameTable = [
	{Sine: 0},
	{SpaceBtn: 0},
	{Keyboard: 0},
	{ScrollTo: 0},
	{Sprite2: 0},
	{TiledBackground: 0},
	{pointsSpaceBar: 0},
	{pointsToUpgrade: 0},
	{Level: 0},
	{Upgrade: 0},
	{Mouse: 0},
	{pointsUpgrade: 0},
	{Upgrade2: 0},
	{pointsUpgrade2: 0},
	{Fade: 0},
	{PointExtra: 0},
	{Audio: 0},
	{UpgradeText: 0},
	{homeBtn: 0},
	{Text: 0},
	{Sprite3: 0},
	{Touch: 0},
	{Number: 0},
	{multi: 0}
];

self.InstanceType = {
	SpaceBtn: class extends self.ISpriteInstance {},
	Keyboard: class extends self.IInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	TiledBackground: class extends self.ITiledBackgroundInstance {},
	pointsSpaceBar: class extends self.ITextInstance {},
	Upgrade: class extends self.ISpriteInstance {},
	Mouse: class extends self.IInstance {},
	pointsUpgrade: class extends self.ITextInstance {},
	Upgrade2: class extends self.ISpriteInstance {},
	pointsUpgrade2: class extends self.ITextInstance {},
	PointExtra: class extends self.ITextInstance {},
	Audio: class extends self.IInstance {},
	UpgradeText: class extends self.ITextInstance {},
	homeBtn: class extends self.ISpriteInstance {},
	Text: class extends self.ITextInstance {},
	Sprite3: class extends self.ISpriteInstance {},
	Touch: class extends self.IInstance {}
}